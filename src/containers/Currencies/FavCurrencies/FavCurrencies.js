import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./FavCurrencies.module.css";
import Popup from "../../../components/UI/Popup/Popup";
import FavoritesItem from "../../../components/FavoritesItem/FavoritesItem";
import * as actions from "../../../store/index";

class FavCurrencies extends Component {
  state = {
    removeAll: false,
  };

  removeAllHandler = () => {
    this.setState({ removeAll: true });
  };
  closePopupHandler = () => {
    this.setState({ removeAll: false });
  };
  confirmPopupHandler = () => {
    this.props.onDeleteAll();
    this.setState({ removeAll: false });
  };
  render() {
    let favoritesItem, removeAll, removeAllPopup;
    if (this.props.favorites.length > 0) {
      favoritesItem = this.props.favorites.map((el) => {
        return <FavoritesItem key={el.code} obj={el} />;
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

    removeAllPopup =
      "Czy na pewno chcesz usunąć wszystkie waluty z ulubionych?";

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
        <Popup
          popupMessage={removeAllPopup}
          show={this.state.removeAll}
          closePopup={this.closePopupHandler}
          confirmHandler={this.confirmPopupHandler}
        />
        <div className={classes.removeAllWrapper}>{removeAll}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteAll: () => dispatch(actions.deleteAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavCurrencies);
