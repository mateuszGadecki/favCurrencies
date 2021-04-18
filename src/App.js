import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";

import Layout from "./hoc/Layout/Layout";
import Currencies from "./containers/Currencies/Currencies";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  render() {
    const { loading } = this.state;

    if (loading) {
      return null;
    }
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
