import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";

class App extends Component {
  componentDidMount() {
    fetch("http://api.nbp.pl/api/exchangerates/tables/a/?format=json")
      .then((res) => res.json())
      .then((res) => console.log(res));

    fetch("http://api.nbp.pl/api/exchangerates/tables/c/?format=json")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  render() {
    return <Layout />;
  }
}

export default App;
