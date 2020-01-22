import React, { Component } from "react";
import classes from "./Drum.module.css";
import "../App.css";
import { Aux } from "./hoc";
import DrumPad from "./DrumPad";
import VolumeBox from "./VolumeBox";
import EventDisplay from "./EventDisplay";
import OnOffSwitch from "./OnOffSwitch";
import RecBtn from "./RecBtn";

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
  state = {
    volume: 0.75,
    whatIsClicked: "what is clicked",
    off: true,
    isRecorded: false,
    arr: []
  };
  playMusic = (param) => {
    const url = (bankOne.find(el => el.id === param)).url;
    console.log(url);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.loop = true;
    audio.play()
  }
  setLoudness = volume => {
    if (volume > 1 || volume < 0) return;
    this.setState({
      volume
    });
  };
  setWhatWasClicked = (id, time) => {
    this.setState({
      whatIsClicked: id
    });
    if (!this.state.off && this.state.isRecorded)
      this.state.arr.push({ id, time });
  };
  handleClick = () => {
    this.setState({
      off: !this.state.off
    });
  };
  handleRecordClick = () => {
    this.setState({
      isRecorded: !this.state.isRecorded
    });
    if (this.state.isRecorded === false) {
      this.setState({
        arr: []
      });
    }
  };
  playSong = (arr) => {
    const newArr = arr.reduce(
      (accumulator, current, idx) => {
        if (idx > 0) {
          let time = current.time - accumulator[0].time;
          accumulator.push({ id: current.id, time });
        }
        return accumulator;
      },
      [arr[0]]
    );
    //console.log(newArr);
    newArr[0] = {id: newArr[0].id, time: 0};
    console.log(newArr)
    newArr.map(el => {
      setTimeout(() => {
        //console.log(el.id);
        this.playMusic(el.id)
      }, el.time);
    });
  };
  render() {
    let bank = [];
    if (this.state.off) {
      bank = bankOne.map(el => Object.assign({ ...el, url: " " }));
    } else {
      bank = [...bankOne];
    }
    const playBtn = () => {
      if (this.state.arr.length > 0 && !this.state.isRecorded) {
        return <button onClick={()=>this.playSong(this.state.arr)}>play</button>;
      }
    };
    return (
      <Aux>
        <div className={[classes.DrumWrapper, "dupa"].join(" ")}>
          <div className={classes.drumMachineBox}>
            {bank.map(soundObj => {
              return (
                <DrumPad
                  sendSampleId={(id, time) => this.setWhatWasClicked(id, time)}
                  volume={this.state.volume}
                  key={soundObj.keyCode}
                  keyCode={soundObj.keyCode}
                  keyTrigger={soundObj.keyTrigger}
                  id={soundObj.id}
                  url={soundObj.url}
                />
              );
            })}
          </div>
          <div className={classes.DrumControlers}>
            <OnOffSwitch clicked={this.handleClick} isOff={this.state.off} />
            <EventDisplay
              className={classes.Info}
              info={this.state.whatIsClicked}
            />
            <VolumeBox setLoudness={volume => this.setLoudness(volume)} />
            {!this.state.off && <RecBtn
              clicked={this.handleRecordClick}
              isRec={this.state.isRecorded}
            />}
            {playBtn()}
          </div>
        </div>
      </Aux>
    );
  }
}
