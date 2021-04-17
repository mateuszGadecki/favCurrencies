import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./FavCurrencies.module.css";
import Popup from "../../../components/UI/Popup/Popup";
import FavoritesItem from "../../../components/FavoritesItem/FavoritesItem";

import * as actions from "../../../store/index";

class FavCurrencies extends Component {
  state = {
    removeAll: false,
    removeCurrency: false,
  };

  removeAllHandler = () => {
    this.setState({ removeAll: true });
  };
  removeCurrencyHandler = (obj) => {
    this.props.onCurrentItem(obj);
    this.setState({ removeCurrency: true });
  };
  closePopupHandler = () => {
    this.setState({ removeAll: false });
    this.setState({ removeCurrency: false });
  };

  confirmRemovnigAll = () => {
    this.props.onDeleteAll();
    this.setState({ removeAll: false });
  };
  confirmRemovnigOne = () => {
    this.props.onDeleteOneItem(this.props.currentItem.code);
    this.setState({ removeCurrency: false });
  };

  render() {
    let favoritesItem, removeAll, removingAllMessage, removingOneMessage, popup;
    removingAllMessage =
      "Czy na pewno chcesz usunąć wszystkie waluty z ulubionych?";
    removingOneMessage = `Czy na pewno chcesz usunąć walutę: ${this.props.currentItem.currency} z ulubionych?`;
    if (this.props.favorites.length > 0) {
      popup = (
        <Popup
          popupMessage={removingOneMessage}
          show={this.state.removeCurrency}
          closePopup={this.closePopupHandler}
          confirmHandler={this.confirmRemovnigOne}
        />
      );
      favoritesItem = this.props.favorites.map((el) => {
        return (
          <FavoritesItem
            key={el.code}
            obj={el}
            removeButton={this.removeCurrencyHandler}
          />
        );
      });
      removeAll = (
        <button
          onClick={this.removeAllHandler}
          className={classes.removeButton}
        >
          Usuń wszyskie
        </button>
      );
    } else {
      favoritesItem = (
        <div>
          <p className={classes.message}>
            Dodaj pierwszą walutę do ulubionych!
          </p>
        </div>
      );
      removeAll = null;
    }

    return (
      <div className={classes.favList}>
        <div className={classes.listTitles}>
          <h2 className={classes.currency}>Waluta</h2>
          <h2>Kupno</h2>
          <h2>Sprzedaż</h2>
          <h2>Średni</h2>
          <h2>Usuń</h2>
        </div>
        {favoritesItem}
        {popup}
        <Popup
          popupMessage={removingAllMessage}
          show={this.state.removeAll}
          closePopup={this.closePopupHandler}
          confirmHandler={this.confirmRemovnigAll}
        />
        <div className={classes.removeAllWrapper}>{removeAll}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    currentItem: state.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteAll: () => dispatch(actions.deleteAll()),
    onDeleteOneItem: (code) => dispatch(actions.removeCurrency(code)),
    onCurrentItem: (obj) => dispatch(actions.currentItem(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavCurrencies);
