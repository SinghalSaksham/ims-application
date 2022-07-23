import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createCategory, updateCategory } from "../../actions/categorys";

const initialState = { name: "", itemNumber: 0, description: "" };

const Form = ({ currId, setCurrId }) => {
  const [inputData, setInputData] = useState(initialState);

  const category = useSelector((state) =>
    currId ? state.categorys.find((categ) => categ._id === currId) : null
  );

  useEffect(() => {
    if (category) setInputData(category);
  }, [category]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (category) {
      dispatch(updateCategory(currId, inputData));
    } else dispatch(createCategory(inputData));
    handleClear();
  };

  const handleClear = () => {
    setInputData(initialState);
    setCurrId(null);
  };

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="card container my-5 py-5 px-3" style={{ width: "25rem" }}>
        <div className="text-center">
          <h1>{!category ? "Create a category" : "Update the category"}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={inputData.name}
              onChange={(e) => handleChange(e)}
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Description
            </label>
            <input
              value={inputData.description}
              onChange={(e) => handleChange(e)}
              type="text"
              className="form-control"
              id="description"
              name="description"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary m-2">
              {!category ? "Create" : "Update"}
            </button>
            <button className="btn btn-danger" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
