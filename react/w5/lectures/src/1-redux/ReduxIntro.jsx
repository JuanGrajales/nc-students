import React from "react";
import { connect } from "react-redux";
import { increment } from "./complex-setup";

const ReduxIntro = ({ counter, incrementCount }) => {
  return (
    <div>
      <h2>Data from Redux Store</h2>
      <button onClick={incrementCount}>Increment Counter</button>
      <p>counter: {counter}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(increment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxIntro);
