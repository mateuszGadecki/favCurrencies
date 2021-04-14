import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/index";

class Currencies extends Component {
  componentDidMount() {
    this.props.onInitCurrencies();
  }

  render() {
    if (this.props.currencies) {
      console.log(this.props.currencies);
    }
    return (
      <div>
        <div>currencies</div>
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
