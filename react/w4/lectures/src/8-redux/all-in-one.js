import { createStore, combineReducers } from "redux";

// Let's talk about going to the bank
// person, cashier, bank vault

// actions file
// every action you create must have a corresponding case in the switch statement of a reducer
export const increment = (num = 1) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

// reducers file
export const counterReducer = (state = 11, action) => {
  console.log("counterReducer receives the action", action);
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    default:
      return state;
  }

  // if(action.type === 'INCREMENT') {
  //   return state + action.payload
  // } else {
  //   state
  // }
};

// store file
export const myStore = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
