import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createProduct, updateProduct } from "../../actions/products";
import { updateItemNum } from "../../actions/categorys";

const initialState = { name: "", price: 0, quantity: 0, category: "" };

const Form = ({ currId, setCurrId }) => {
  const [inputData, setInputData] = useState(initialState);

  const product = useSelector((state) =>
    currId ? state.products.find((prod) => prod._id === currId) : null
  );

  const Catcards = useSelector((state) => state.categorys);
  // console.log("CatCards", Catcards);

  useEffect(() => {
    if (product) setInputData(product);
  }, [product]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (product) {
      dispatch(updateProduct(currId, inputData));
    } else {
      dispatch(createProduct(inputData));
      dispatch(updateItemNum(inputData.category, "increase"));
    }
    handleClear();
  };

  const handleClear = () => {
    setInputData(initialState);
    // console.log(inputData.category.length);
    setCurrId(null);
  };

  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="card container my-5 py-5 px-3" style={{ width: "25rem" }}>
        <div className="text-center">
          <h1>{!product ? "Create a product" : "Update the product"}</h1>
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
          {!currId ? (
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={inputData.category}
                onChange={(e) => handleChange(e)}
                name="category"
              >
                {/* {currId ? (
                  <option selected>{inputData.category}</option>
                ) : (
                  <option selected>Open this select menu</option>
                )} */}
                <option selected>Open this select menu</option>
                {Catcards.map((card) => (
                  <option key={card._id} value={card.name}>
                    {card.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <></>
          )}

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price (in Rs.)
            </label>
            <input
              value={inputData.price}
              onChange={(e) => handleChange(e)}
              type="number"
              className="form-control"
              id="price"
              name="price"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              value={inputData.quantity}
              onChange={(e) => handleChange(e)}
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary m-2">
              {!product ? "Create" : "Update"}
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
