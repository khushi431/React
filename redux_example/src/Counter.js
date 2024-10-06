// src/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count); // Access the count from Redux store
  const dispatch = useDispatch(); // Get the dispatch function

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
