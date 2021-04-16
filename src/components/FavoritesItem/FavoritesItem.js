import React from "react";

import classes from "./FavoritesItem.module.css";

const favoritesItem = (props) => {
  console.log(props.obj);
  return (
    <ul className={classes.favItemWrapper}>
      <li>{props.obj.currency}</li>
      <li className={classes.center}>
        {(Math.round((props.obj.bid + Number.EPSILON) * 100) / 100).toFixed(2)}
      </li>
      <li className={classes.center}>
        {(Math.round((props.obj.ask + Number.EPSILON) * 100) / 100).toFixed(2)}
      </li>
      <li className={classes.center}>{props.obj.mid}</li>
      <button className={classes.removeButton}>X</button>
    </ul>
  );
};

export default favoritesItem;
