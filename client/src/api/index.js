import axios from "axios";

// const url = "http://localhost:5000/";
// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({ baseURL: "https://ims-application.herokuapp.com/" });

export const fetchProducts = () => API.get("/product");
export const createProduct = (productData) => {
  return API.post("/product", productData);
};

export const deleteProduct = (id) => API.delete(`/product/${id}`);

export const updateProduct = (id, details) =>
  API.put(`/product/${id}`, details);

export const fetchCategorys = () => API.get("/category");
export const createCategory = (CategoryData) => {
  return API.post("/category", CategoryData);
};

export const deleteCategory = (id) => API.delete(`/category/${id}`);

export const updateCategory = (id, details) =>
  API.put(`/category/${id}`, details);

export const updateItemNum = (category, operation) => {
  // console.log(increment);
  return API.patch(`/category/${category}/${operation}`);
};

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
export const editUser = (formData) => API.patch("/user/edit", formData);
export const resetPassword = (email) => API.post("/user/sendEmail", email);
export const passwordUpdate = (formdata) =>
  API.post("/user/changePassword", formdata);
