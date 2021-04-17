import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Currencies.module.css";
import * as actions from "../../store/index";
import CurrenciesList from "./CurrenciesList/Currencies.List";
import FavCurrencies from "./FavCurrencies/FavCurrencies";

class Currencies extends Component {
  componentDidMount() {
    this.props.onInitCurrencies();
    this.props.onSetFavCurrencies();
  }

  render() {
    return (
      <div className={classes.Currencies}>
        <div className={classes.mobileBottom}>
          <CurrenciesList />
        </div>
        <div className={classes.mobileTop}>
          <FavCurrencies />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCurrencies: () => dispatch(actions.initCurrencies()),
    onSetFavCurrencies: () => dispatch(actions.setFavCurrencies()),
  };
};

export default connect(null, mapDispatchToProps)(Currencies);
