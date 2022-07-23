import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const UnSortedCards = ({ setCurrId, isSort }) => {
  const cards = useSelector((state) => state.products);
  console.log("cards", cards);
  return (
    <div className="d-flex flex-row flex-wrap mb-3">
      {cards.map((card) => (
        <Card
          key={card._id}
          cardDetails={card}
          setCurrId={setCurrId}
          isSort={isSort}
        />
      ))}
    </div>
  );
};

export default UnSortedCards;
