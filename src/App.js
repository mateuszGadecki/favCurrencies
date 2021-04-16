import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";

import Layout from "./hoc/Layout/Layout";
import Currencies from "./containers/Currencies/Currencies";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact>
          <Currencies />
        </Route>
        <Redirect to="/" />
      </Switch>
    );

    return <Layout>{routes}</Layout>;
  }
}

export default App;
