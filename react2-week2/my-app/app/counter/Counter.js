"use client";
import React from "react";
import { useCounter } from "./CounterContex";

const Counter = () => {
  const { count, dispatch } = useCounter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;