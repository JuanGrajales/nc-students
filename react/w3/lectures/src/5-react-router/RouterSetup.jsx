import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import NotFound from "./NotFound";

class RouterSetup extends Component {
  render() {
    return (
      <BrowserRouter>
        <h2>Nav</h2>
        <ul>
          <li>
            <Link to="/page">Page 1</Link>
          </li>
          <li>
            <Link to="/page/2">Page 2</Link>
          </li>
          <li>
            <Link to="/page/3">Page 3</Link>
          </li>
        </ul>
        <h2>Switch will choose the route that has the path matching the url</h2>
        <Switch>
          <Route path="/page" render={() => <Page1 />} />
          <Route path="/page/2" render={() => <Page2 />} />
          <Route path="/page/3" render={() => <Page3 />} />
          <Route path="/" render={() => <NotFound />} />
          {/* <Route exact path="/page" render={() => <Page1 />} />
            <Route exact path="/page/2" render={() => <Page2 />} />
            <Route exact path="/page/3" render={() => <Page3 />} />
            <Route exact path="/" render={() => <NotFound />} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterSetup;

// React Router Setup (this setup is only done once, after its created it will likely not be modified)
// step 1: install react-router-dom by running the following command in the root of your app (i.e. go to where your package.json is located) $ yarn add react-router-dom@version
// note: is step 1 is done correctly you should see react-router-dom in the list of dependencies in package.json
// step 2: in App.js import { BrowserRouter } from 'react-router-dom';
// step 3: in App.js wrap the outer most HTML element with <BrowserRouter></BrowserRouter>
// step 4: import { Switch } from 'react-router-dom';
// step 5: inside of BrowserRouter add an opening and closing tag for the Switch component <Switch></Switch>

// How to create a link to a new page on your react app?
// step 1: at the top of the componet you want to use the link import { Link } from 'react-router-dom';
// step 2: place the component wherever you want it to display using this syntax <Link to="url/path/user/will/see/in/the/url">Link Name</Link>

// Link vs NavLink
// same functionality, you can style NavLink not Link
// Both Link and NavLink essentially change what is displayed in the url

// How to display the page for the link the user clicked on?
// step 1: inside the <Switch></Switch> call the Route component using the following syntax <Route exact path="url/used/in/the/to/attribute/for/the/Link/component" render={() => <ComponentToBeDisplayed />} />
// step 2: the page where you added the Route component import the component using import { Route } from 'react-router-dom';
