import React from "react";

import classes from "./Footer.module.css";

const footer = () => {
  return (
    <div className={classes.Footer}>
      <p className={classes.rights}>
        &#169; 2021 Currencies. Wszystkie prawa zastrzeżone.
      </p>
    </div>
  );
};

export default footer;
