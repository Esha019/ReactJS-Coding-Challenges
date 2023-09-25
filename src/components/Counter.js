import React from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../utils/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <hr />
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
        variant="success"
        className="mx-2"
      >
        Increase
      </button>

      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
        variant="danger"
      >
        Decrease
      </button>

      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
        variant="success"
      >
        IncrementBy 10
      </button>

      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrementByAmount(10));
        }}
        variant="danger"
      >
        DecrementBy 10
      </button>
{}
    </div>
  );
};
export default Counter;