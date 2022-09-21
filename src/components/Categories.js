import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Categories() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch({
      type: "CHECK_STATUS",
    });
  };

  return (
    <div className="categories">
      <p>{category}</p>
      <button
        type="button"
        className="btn btn-grey"
        onClick={checkStatusHandler}
      >
        Check status
      </button>
    </div>
  );
}

export default Categories;
