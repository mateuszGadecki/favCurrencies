import React, { Component } from "react";
import { connect } from "react-redux";

import Spinner from "../../../components/UI/Spinner/Spinner";
import CurrenciesItem from "../../../components/CurrenciesItem/CurrenciesItem";
import classes from "./CurrenciesList.module.css";

class CurrenciesList extends Component {
  state = {};

  render() {
    let listContent;
    if (this.props.loading) {
      listContent = (
        <div>
          <Spinner />
        </div>
      );
    } else {
      if (this.props.currencies) {
        listContent = (
          <div>
            {this.props.currencies.map((el) => {
              return <CurrenciesItem key={el.code} obj={el} />;
            })}
          </div>
        );
      }
    }
    console.log(this.props.currencies);
    return (
      <div className={classes.currenciesList}>
        <div className={classes.listTitles}>
          <h2>Currency</h2>
          <h2>Average</h2>
          <h2>Add to favorites</h2>
        </div>
        {listContent}
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

export default connect(mapStateToProps)(CurrenciesList);
