import express from "express";
import {
  signin,
  signup,
  editUser,
  sendEmail,
  passwordUpdate,
} from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.patch("/edit", editUser);

router.post("/sendEmail", sendEmail);

router.post("/changePassword", passwordUpdate);

export default router;
