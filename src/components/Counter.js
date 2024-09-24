import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, remove } from "../slice/counterSlice";

const Counter = () => {
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();

  return (
    <div>
      Counter : {count}
      <div>
        <button
          onClick={() => {
            dispatch(add());
          }}
        >
          Add+
        </button>
        <button
          onClick={() => {
            dispatch(remove(10));
          }}
        >
          Remove-
        </button>
      </div>
    </div>
  );
};

export default Counter;
