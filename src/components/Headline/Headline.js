import React from "react";

import classes from "./Headline.module.css";

const headline = () => {
  return (
    <div className={classes.wrapper}>
      <div data-text="Currency" className={classes.title}>
        Currency
      </div>
    </div>
  );
};

export default headline;
