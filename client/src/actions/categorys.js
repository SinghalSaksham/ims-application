import * as api from "../api/index.js";

export const createCategory = (Category) => async (dispatch) => {
  try {
    const { data } = await api.createCategory(Category);

    dispatch({ type: "CREATE_CATEGORY", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCategorys = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategorys();

    dispatch({ type: "FETCH_CATEGORY", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await api.deleteCategory(id);
    // console.log("delete");

    dispatch({ type: "DELETE_CATEGORY", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = (id, details) => async (dispatch) => {
  try {
    const { data } = await api.updateCategory(id, details);
    // console.log("data", data);

    dispatch({ type: "UPDATE_CATEGORY", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateItemNum = (category, increment) => async (dispatch) => {
  try {
    const { data } = await api.updateItemNum(category, increment);
    dispatch({ type: "UPDATE_CATEGORY", payload: data });
  } catch (error) {
    console.log(error);
  }
};
