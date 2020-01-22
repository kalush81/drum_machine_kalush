import React, { Component } from "react";
import classes from "./Drum.module.css";

export default class OnOffSwitch extends Component {
  render() {
    return (
      <div>
        <h4 style={{margin: '10px'}}>Power button</h4>
          <label className={classes.Switch}>
            <input onClick={this.props.clicked} type="checkbox" />
            <span className={classes.Slider}></span>
          </label>
      </div>
    );
  }
}
        // onClick={this.props.clicked}
        // className={`${this.props.isOff ? classes.Switch : classes.Pitch}`}
        // style={{
        //   background: `${this.props.isOff ? "black" : "yellow"}`,
        //   color: `${this.props.isOff ? "white" : "black"}`      
        // }}