import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../Form/Form";
import { getProducts } from "../../actions/products";
import { getCategorys } from "../../actions/categorys";
import UnSortedCards from "../UnSortedCards/UnSortedCards";

const Home = () => {
  const [currId, setCurrId] = useState(null);
  const [isSort, setSort] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorys());
    dispatch(getProducts());
  }, [currId, dispatch]);

  // useEffect(() => {
  //   dispatch(getCategorys());
  // }, []);

  // const cards = useSelector((state) => state.products);
  return (
    <div className="container-fluid p-5">
      <div className="row mt-3 mr-5 d-flex flex-row-reverse">
        <button
          className="col-2 btn btn-secondary"
          onClick={() => dispatch(getProducts())}
        >
          Sort according to Category
        </button>
      </div>
      <div className="row">
        <div className="col-8 mt-3">
          <UnSortedCards setCurrId={setCurrId} isSort={isSort} />
        </div>
        <div className="col-4 mt-3">
          <Form currId={currId} setCurrId={setCurrId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
