import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "./all-in-one";

class ReduxIntro extends Component {
  render() {
    return (
      <div>
        <h1>Redux Intro</h1>
        <h2>Data from Redux Store</h2>
        <button onClick={this.props.increment}>Increment Counter</button>
        <p>counter prop: {this.props.counter}</p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  increment: () => increment(),
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment),
//   }
// }

const mapReduxStateToComponentProps = (state) => {
  return { counter: state.counter };
};

export default connect(
  mapReduxStateToComponentProps,
  mapDispatchToProps
)(ReduxIntro);
