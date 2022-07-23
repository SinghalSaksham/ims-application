import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  name: String,
  itemNumbers: { type: Number, default: 0 },
  description: String,
});

const CategorysData = mongoose.model("CategorysData", CategorySchema);

export default CategorysData;
