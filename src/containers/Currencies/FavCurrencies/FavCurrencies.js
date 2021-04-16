import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./FavCurrencies.module.css";
import FavoritesItem from "../../../components/FavoritesItem/FavoritesItem";

class FavCurrencies extends Component {
  render() {
    let favoritesItem, removeAll;
    if (this.props.favorites.length > 0) {
      favoritesItem = this.props.favorites.map((el) => {
        return <FavoritesItem key={el.code} obj={el} />;
      });
      removeAll = (
        <button className={classes.removeButton}>Usuń wszyskie</button>
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

export default connect(mapStateToProps)(FavCurrencies);
