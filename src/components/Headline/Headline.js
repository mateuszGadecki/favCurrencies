import React from "react";

import classes from "./Headline.module.css";

const headline = () => {
  return (
    <div className={classes.Headline}>
      <div className={classes.HeadWrapper}>
        <p className={classes.Head}>
          Obserwuj swoje ulubione waluty, aby być na bieżąco.
        </p>
      </div>
    </div>
  );
};

export default headline;
