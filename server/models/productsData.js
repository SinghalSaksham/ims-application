import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number,
});

const productsData = mongoose.model("productsData", productSchema);

export default productsData;
