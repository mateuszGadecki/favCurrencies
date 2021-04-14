import React from "react";

import classes from "./Headline.module.css";

const headline = () => {
  return (
    <div className={classes.Headline}>
      <div className={classes.HeadWrapper}>
        <p className={classes.Head}>
          Follow your favorite currencies to stay up to date
        </p>
      </div>
    </div>
  );
};

export default headline;
