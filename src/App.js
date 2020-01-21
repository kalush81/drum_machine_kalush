import React from "react";
import DrumMachine from "./components/DrumMachine";
//import VolumeBox from "./components/VolumeBox";
import "./App.css";

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>Drum Machine</h1>
        <DrumMachine />
        {/* <VolumeBox /> */}
      </div>
    );
  }
}

export default App;
