import { createStore } from 'redux';

const counterReducer = (store = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: store.counter + 1,
    };
  }
  if (action.type === 'increase') {
    return {
      counter: store.counter + action.amount,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: store.counter - 1,
    };
  }
  return store;
};

const store = createStore(counterReducer);

export default store;
