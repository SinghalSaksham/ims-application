import usersData from "../models/usersData.js";
import otpData from "../models/otpData.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";

const API_KEY =
  "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";

sgMail.setApiKey(API_KEY);

const mailer = async (email, otp) => {
  // console.log("in mailer");
  const message = {
    to: email,
    from: "singhalsaksham.mzn@gmail.com",
    subject: "OTP verification for Password Change",
    text: `Your OTP is ${otp}`,
    html: `<h1>Your OTP is ${otp}</h1>`,
  };

  sgMail
    .send(message)
    .then((response) => console.log("Email is sent"))
    .catch((error) => console.log(error));
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await usersData.findOne({ email });
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const oldUser = await usersData.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await usersData.create({
      email,
      password: hashedPassword,
      name,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
export const editUser = async (req, res) => {
  const { email, old_password, name, new_password, old_email } = req.body;
  try {
    if (old_password.length === 0) {
      const result = await usersData.findOneAndUpdate(
        { email: old_email },
        { email, name },
        { new: true }
      );
      const token = jwt.sign({ email: result.email, id: result._id }, "test", {
        expiresIn: "1h",
      });
      res.status(200).json({ result, token });
    } else {
      const oldUser = await usersData.findOne({ email: old_email });
      const isPasswordCorrect = await bcrypt.compare(
        old_password,
        oldUser.password
      );

      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Invalid Password" });

      const hashedPassword = await bcrypt.hash(new_password, 12);

      const result = await usersData.findOneAndUpdate(
        { email: old_email },
        { password: hashedPassword },
        { new: true }
      );
      const token = jwt.sign({ email: result.email, id: result._id }, "test", {
        expiresIn: "1h",
      });
      res.status(200).json({ result, token });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

export const sendEmail = async (req, res) => {
  const { email } = req.body;
  // console.log("in server", email);
  try {
    const oldUser = await usersData.findOne({ email });
    if (!oldUser) res.status(404).json({ message: "User doesn't exist" });

    const data = Math.floor(Math.random() * 1000000 + 1);

    const result = await otpData.create({
      email,
      code: data,
      expiresIn: new Date().getTime() + 300 * 1000,
    });
    // console.log(result);
    await mailer(email, data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const passwordUpdate = async (req, res) => {
  const { otp, email, password } = req.body;

  try {
    const result = await otpData.find({ email, code: otp });
    if (!result) return res.status(404).json({ message: "OTP doesn't exist" });

    const currentTime = new Date().getTime();
    const diff = result.expiresIn - currentTime;

    if (diff < 0) res.status(500).json({ message: "Token Expired" });

    // const oldUser = await usersData.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 12);

    const result1 = await usersData.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    );

    await otpData.deleteOne({ email });

    res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
