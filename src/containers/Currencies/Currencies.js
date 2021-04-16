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

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCurrencies: () => dispatch(actions.initCurrencies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
