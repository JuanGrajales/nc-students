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
      </div>
    );
  }
}

const mapDispatchToProps = {
  increment: () => increment(),
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxIntro);
