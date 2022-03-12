import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Jess from "./Jess";
import Juan from "./Juan";
import Profile from "./Profile";

class RouterParams extends Component {
  state = {
    users: ["juan", "jess", "jax", "roy"],
  };

  displayUserLinks = () => {
    return this.state.users.map((user) => {
      return (
        <li>
          <Link to={`/profile/${user}`}>{user}'s Profile</Link>
        </li>
      );
    });
  };
  render() {
    return (
      <BrowserRouter>
        <h1>Nav</h1>
        <p>
          Anything outside of the Switch component will always show no matter
          what the URL
        </p>
        <ul>
          {/* <li>
            <Link to="/juan">Juan Profile</Link>
          </li>
          <li>
            <Link to="/jess">Jess Profile</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li> */}
          {this.displayUserLinks()}
        </ul>
        <p>Switch will choose the route that has the path matching the url</p>
        <Switch>
          {/* <Route exact path="/juan" render={() => <Juan />} />
          <Route exact path="/jess" render={() => <Jess />} /> */}
          <Route
            exact
            path="/profile/:userName"
            render={(props) => <Profile name="Juan" {...props} />}
          />
          {/* <Route
            exact
            path="/profile"
            render={(props) => <Profile name="Juan" prop1={props.prop1} prop2={props.prop2} prop3={props.prop3}/>}
          /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterParams;
