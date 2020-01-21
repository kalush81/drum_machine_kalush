import React, { Component } from "react";
import classes from "./Drum.module.css";
import Fader from './Fader';

export default class VolumeBox extends Component {
  state = {
    clicked: false,
    volumeValue: null,
    posX: 150
  };

  componentDidMount() {
    
    const box = document.getElementById("VolumeBox");
    const x = box.getClientRects()[0].x
    let isClicked = false;

    box.addEventListener("mousedown", e => {
      isClicked = true;
    });
    box.addEventListener("mouseup", e => {
      isClicked = false;
    });
    box.addEventListener("mousemove", e => {
      if (isClicked) {
        if (e.clientX - x < 0 || e.clientX-x>200) return
        this.setState({
            volumeValue: ((e.clientX - x) /200).toFixed(1),
            posX: e.clientX - x
        })
        this.props.setLoudness(this.state.volumeValue)
      }
    }); 
  }
  
  render() {
    return (
      <div id="VolumeBox" className={classes.Volume} >
        <h2>volume</h2>
        <Fader volumeValue={this.state.volumeValue} posX={this.state.posX}/>
      </div>
    );
  }
}
