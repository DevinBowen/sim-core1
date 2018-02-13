import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="pop">
        {/* 56C */}
          <video src={require("./assets/kittens-puppies.mp4")} width="400"controls></video>

        </div>
{/* --------------------------------------- */}
        <div className="title">The Web's Best Code Tutorials</div>
        <div className="body">
        <div className="colA">
          <video src={require("./assets/vid1.mp4")} width="400"controls></video>
          <video src={require("./assets/vid2.mp4")} width="400"controls></video>
        </div>
        <div className="colB">
          <video src={require("./assets/vid3.mp4")} width="400"controls></video>
          <video src={require("./assets/vid4.mp4")} width="400"controls></video>
        </div>
          
        </div>
        <div className="footer">
          <button>Random Video</button>
        </div>
      </div>
    );
  }
}

export default App;
