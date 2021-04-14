import React, { Component } from "react";

import Headline from "../../components/Headline/Headline";
import Footer from "../../components/Footer/Footer";
import Currencies from "../../containers/Currencies/Currencies";
import Aux from "../Aux/Aux";
import classes from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Headline />
        <Currencies />
        <main className={classes.Content}>{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
