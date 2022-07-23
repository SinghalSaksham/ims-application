import express from "express";

import {
  getCategorys,
  createCategory,
  deleteCategory,
  updateCategory,
  updateItemNum,
} from "../controllers/category.js";

const router = express.Router();

router.get("/", getCategorys);

router.post("/", createCategory);

router.delete("/:id", deleteCategory);

router.put("/:id", updateCategory);

router.patch("/:category/:operation", updateItemNum);

export default router;
