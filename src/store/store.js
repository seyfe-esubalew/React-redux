import React from "react";
import { createSrore } from "redux";

const counterReducer = (state, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;