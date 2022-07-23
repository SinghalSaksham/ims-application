import CategorysData from "./../models/categorysData.js";
import mongoose from "mongoose";

export const getCategorys = async (req, res) => {
  try {
    const Categorys = await CategorysData.find();

    res.status(200).json(Categorys);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, itemNumbers, description } = req.body;
    // console.log(req.body);
    const result = await CategorysData.create({
      name,
      itemNumbers,
      description,
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.body);

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No category with id: ${id}`);

    await CategorysData.findByIdAndRemove(id);

    res.status(200).json("Category deleted successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, itemNumbers, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedCategory = { name, itemNumbers, description, _id: id };

    const result = await CategorysData.findByIdAndUpdate(id, updatedCategory, {
      new: true,
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateItemNum = async (req, res) => {
  try {
    const { category, operation } = req.params;
    // const { increment } = req.body;

    const add = operation == "increase" ? 1 : -1;
    const result1 = await CategorysData.findOne({ name: category });
    const result = await CategorysData.findOneAndUpdate(
      { name: category },
      { itemNumbers: result1.itemNumbers + add },
      { new: true }
    );
    // const updatedCategory = { name, itemNumbers, description, _id: id };

    // const result = await CategorysData.findByIdAndUpdate(id, updatedCategory, {
    //   new: true,
    // });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
