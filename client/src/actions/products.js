import * as api from "../api/index.js";

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);
    // console.log("data", data);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();

    dispatch({ type: "FETCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);
    console.log("delete");

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (id, details) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, details);
    console.log("data", data);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
