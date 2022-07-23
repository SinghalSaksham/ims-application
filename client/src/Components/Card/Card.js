import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../../actions/products";
import { updateItemNum } from "../../actions/categorys";

const Card = ({ cardDetails, setCurrId }) => {
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    setCurrId(id);
  };

  const handleDelete = () => {
    dispatch(deleteProduct(cardDetails._id));
    dispatch(updateItemNum(cardDetails.category, "decrease"));
  };

  return (
    <div className="card m-2" style={{ width: " 18rem" }}>
      <div className="card-body text-center">
        <h5 className="card-title text-center">{cardDetails.name}</h5>
        <p className="card-text">Price: Rs.{cardDetails.price}</p>
        <p className="card-text">Category: {cardDetails.category}</p>
        <p className="card-text">Quantity: {cardDetails.quantity}</p>
        <button
          className="btn btn-primary m-3"
          onClick={() => handleUpdate(cardDetails._id)}
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

export default Card;
