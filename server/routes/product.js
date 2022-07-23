import express from "express";

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  deleteByCategory,
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

router.delete("/deleteByCategory/:category", deleteByCategory);

export default router;
