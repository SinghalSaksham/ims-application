import * as api from "../api/index.js";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data, status } = await api.signin(formData);

    dispatch({ type: "AUTH", data });

    if (status === 200) navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: "AUTH", data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const editUser = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.editUser(formData);
    // console.log(data);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = (email) => async (dispatch) => {
  try {
    await api.resetPassword(email);
    // dispatch();
    // console.log(email);
  } catch (error) {
    console.log(error);
  }
};

export const passwordUpdate = (formdata, navigate) => async (dispatch) => {
  try {
    await api.passwordUpdate(formdata);
    navigate("/auth");
    // dispatch();
    // console.log(email);
  } catch (error) {
    console.log(error);
  }
};
