import { createStore, combineReducers } from "redux";

// actions file
// every action you create must have a corresponding case in the switch statement of a reducer
export const increment = (num = 1) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

// reducers file
export const counterReducer = (state = 10, action) => {
  console.log("counterReducer receives the action", action);
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    default:
      return state;
  }
};

// store file
export const myStore = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
