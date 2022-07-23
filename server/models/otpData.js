import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
  email: { type: String, required: true },
  code: { type: Number, required: true },
  expiresIn: Number,
});

const otpsData = mongoose.model("otpsData", otpSchema);

export default otpsData;
