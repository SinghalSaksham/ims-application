import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategorys } from "../../actions/categorys";
import { getProducts } from "../../actions/products";
import CategoryForm from "../CategoryForm/CategoryForm";
import CatCards from "../CatCards/CatCards";

const Category = () => {
  const [currId, setCurrId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getProducts());
    dispatch(getCategorys());
  }, [currId, dispatch]);

  // const Catcards = useSelector((state) => state.categorys);

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-8 mt-3">
          <CatCards setCurrId={setCurrId} />
        </div>
        <div className="col-4 mt-3">
          <CategoryForm currId={currId} setCurrId={setCurrId} />
        </div>
      </div>
    </div>
  );
};

export default Category;
