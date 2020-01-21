import React, { Component } from "react";
import classes from "./Drum.module.css";
//import { constants } from "fs-extra";

export default class DrumPad extends Component {
  state = {
    keyWasClicked: false,
  };
  
  componentDidMount() { 
    if (this.props.allowToPlay) this.playSound();
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", () => {
      this.setState({
        keyWasClicked: false
      });
    });
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === this.props.keyCode) {
      if ( this.state.keyWasClicked ) return 
      this.playSound();
    }
  };
  handleClick = e => {
      this.playSound(e)
  }
  
  playSound = (e) => {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.volume = this.props.volume
    sound.play();
    this.props.sendSampleId(this.props.id, new Date().getTime())

    if (e === undefined) {
        this.setState({
          keyWasClicked: true
        });
    }
  };
   shouldComponentUpdate(nextProps, nextState) {
     return nextProps.url != this.props.url
   }
  render() {
    return (
      <div
        className={classes.drumPad}
        id={this.props.id}
        onMouseDown={this.handleClick}
      >
        <audio id={this.props.keyTrigger} src={this.props.url}></audio>
        <p>{this.props.keyTrigger}</p>
        <p>{this.props.id}</p>
      </div>
    );
  }
}
