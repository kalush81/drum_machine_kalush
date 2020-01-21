import React, { Component } from "react";
import classes from "./Drum.module.css";

export default class OnOffSwitch extends Component {
  render() {
    return (
      <div
        onClick={this.props.clicked}
        className={`${this.props.isOff ? classes.Switch : classes.Pitch}`}
        style={{
          background: `${this.props.isOff ? "black" : "yellow"}`,
          color: `${this.props.isOff ? "white" : "black"}`      
        }}
      ></div>
    );
  }
}
