import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import user from "./routes/user.js";
import product from "./routes/product.js";
import category from "./routes/category.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

app.use("/user", user);
app.use("/product", product);
app.use("/category", category);

app.get("/", (req, res) => {
  res.send("Hello to inventory management system");
});

// const CONNECTION_URL =
//   "mongodb+srv://saksham:saksham@cluster0.z3z90.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
