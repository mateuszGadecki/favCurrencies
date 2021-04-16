import React from "react";

import classes from "./CurrenciesItem.module.css";

const currenciesItem = (props) => {
  return (
    <ul className={classes.currenciesItemWrapper}>
      <li>{props.obj.currency}</li>
      <li>{props.obj.code}</li>
      <li className={classes.center}>{props.obj.mid}</li>
      <button
        onClick={() => props.addToFavorites(props.obj)}
        className={classes.followButton}
      >
        Obserwuj
      </button>
    </ul>
  );
};

export default currenciesItem;
