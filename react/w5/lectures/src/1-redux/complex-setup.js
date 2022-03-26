import { applyMiddleware, combineReducers, compose, createStore } from "redux";

// action types
export const INCREMENT = "INCREMENT";

// actions
// every action you create must have a corresponding case in the switch statement of a reducer
export const increment = (num = 1) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT1",
  };
};

export const login = () => {
  return {
    type: "SIGN_IN",
  };
};

// reducers
export const counterReducer = (state = 0, action) => {
  console.log("counterReducer state: ", state);
  console.log("counterReducer action object: ", action);
  if (action.type === INCREMENT) {
    return state + action.payload;
  } else if (action.type === "DECREMENT1") {
    return state - 1;
  } else {
    return state;
  }

  // switch (action.type) {
  //   case INCREMENT:
  //     return state + action.payload;
  //   case "DECREMENT":
  //     return state - 1;
  //   default:
  //     return state;
  // }
};

export const loggedReducer = (state = false, action) => {
  console.log("loggedReducer state: ", state);
  console.log("loggedReducer action object: ", action);
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

// combine reducers
export const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middleware
const auth = (store) => (next) => (action) => {
  console.log("auth middleware", action);
  console.log("current state", store.getState());
  // const user = 'Marshal'
  // if(user !== 'Melyssa'){
  //   return;
  // }
  // if(user === 'Melyssa'){
  //   return next(action);
  // }
  return next(action);
};

export const myStore = createStore(
  allReducers,
  composeEnhancer(applyMiddleware(auth))
);
