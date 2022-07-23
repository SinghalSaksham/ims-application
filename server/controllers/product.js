import productsData from "../models/productsData.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await productsData.find().sort({ category: 1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, quantity, price, category } = req.body;
    // console.log(req.body);
    const result = await productsData.create({
      name,
      quantity,
      price,
      category,
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.body);

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await productsData.findByIdAndRemove(id);

    res.status(200).json("Product deleted successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, price, category } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedProduct = { name, quantity, price, category, _id: id };

    const result = await productsData.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    // console.log(req.body);

    // await productsData.findByIdAndRemove(id);
    await productsData.deleteMany({ category });

    res.status(200).json("Products deleted successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
