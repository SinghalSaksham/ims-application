import React from "react";
import CatCard from "./CatCard/CatCard";
import { useSelector } from "react-redux";

const CatCards = ({ setCurrId }) => {
  const Catcards = useSelector((state) => state.categorys);
  return (
    <div className="d-flex flex-row flex-wrap mb-3">
      {Catcards.map((Catcard) => (
        <CatCard
          key={Catcard._id}
          CatcardDetails={Catcard}
          setCurrId={setCurrId}
        />
      ))}
    </div>
  );
};

export default CatCards;
