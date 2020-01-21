import React, { Component } from "react";
import clasess from './Drum.module.css'

export default class EventDisplay extends Component {
  render() {
    return (
      <div className={clasess.Info}>
        <p>{this.props.info}</p>
      </div>
    );
  }
}
