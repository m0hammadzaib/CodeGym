import React from "react";
import { useReducer, useState } from "react";

const RedUse = () => {
  
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{state}</h1>
      <div className="flex gap-3">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="bg-black p-2 text-white rounded-2xl"
        >
          Inc
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="bg-black p-2 text-white rounded-2xl"
        >
          Dcr
        </button>
      </div>
    </div>
  );
};

export default RedUse;
