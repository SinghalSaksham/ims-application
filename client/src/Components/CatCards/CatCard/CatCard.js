import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, updateCategory } from "../../../actions/categorys";
import { deleteProduct } from "../../../actions/products";

const CatCard = ({ CatcardDetails, setCurrId }) => {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.products);

  const handleUpdate = (id) => {
    setCurrId(id);
  };

  const handleDelete = () => {
    dispatch(deleteCategory(CatcardDetails._id));
    cards.forEach((card) => {
      // console.log(cards);
      if (card.category === CatcardDetails.name) {
        dispatch(deleteProduct(card._id));
      }
    });
  };

  return (
    <div className="card m-2" style={{ width: " 18rem" }}>
      <div className="card-body text-center">
        <h5 className="card-title text-center">{CatcardDetails.name}</h5>
        <p className="card-text">Items: {CatcardDetails.itemNumbers}</p>
        <p className="card-text">Description: {CatcardDetails.description}</p>
        <button
          className="btn btn-primary m-3"
          onClick={() => handleUpdate(CatcardDetails._id)}
        >
          Update
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CatCard;
