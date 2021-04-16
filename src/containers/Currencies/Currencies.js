import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Currencies.module.css";
import * as actions from "../../store/index";
import CurrenciesList from "./CurrenciesList/Currencies.List";
import FavCurrencies from "./FavCurrencies/FavCurrencies";

class Currencies extends Component {
  componentDidMount() {
    this.props.onInitCurrencies();
  }

  render() {
    return (
      <div className={classes.Currencies}>
        <CurrenciesList />
        <FavCurrencies />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCurrencies: () => dispatch(actions.initCurrencies()),
  };
};

export default connect(null, mapDispatchToProps)(Currencies);
