import React from "react";

import classes from "./Popup.module.css";
import Aux from "../../../hoc/Aux/Aux";
import BackDrop from "../Backdrop/Backdrop";

const popup = (props) => {
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.closePopup} />
      <div
        className={classes.popup}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className={classes.closeBtnWrapper}>
          <button
            className={classes.closePopupButton}
            onClick={props.closePopup}
          >
            X
          </button>
        </div>

        <p className={classes.popupMessage}>{props.popupMessage}</p>
        <div className={classes.decisionContainer}>
          <button
            className={classes.decisionButtons}
            onClick={props.confirmHandler}
          >
            Tak
          </button>
          <button
            className={classes.decisionButtons}
            onClick={props.closePopup}
          >
            Anuluj
          </button>
        </div>
      </div>
    </Aux>
  );
};

export default popup;
