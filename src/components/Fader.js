import React from "react";
import { Aux } from "./hoc";
import classes from "./Drum.module.css";

export default props => {
  return (
    <Aux>
      <div
        className={classes.Fader}
        style={{ left: `${props.posX - 10}px` }}
      ></div>
      <p>{props.volumeValue}</p>
    </Aux>
  );
};
