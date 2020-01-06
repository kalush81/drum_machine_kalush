import React, { Component } from "react";
import "./Drum.css";
import request from "superagent";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

export default class DrumMachine extends Component {
//   componentDidMount() {
//     document.addEventListener("keydown", this.handleKeyPress);
//   }
//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handleKeyPress);
//   }
  handleKeyPress(e) {
    if (e.keyCode === bankOne[0].keyCode) {
      this.playSound();
    }
  }
  playSound = e => {
    const play = document.getElementById(e.currentTarget.id);
    //console.log(play.children[0].play());
    play.currentTime = 0;
    play.children[0].play();
  };
  
  render() {
    return (
      <React.Fragment>
        <div className="drum-machine-box">
          {bankOne.map(pad => (
            <div
              onClick={this.playSound}
              onKeyDown={this.handleKeyPress}
              keyCode={pad.keyCode}
              className="drum-pad"
              id={pad.id}
            >
              {pad.keyTrigger}
              <audio src={pad.url}></audio>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
