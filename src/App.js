import React, { Component } from "react";
import logo from "./cryingLogo.png";
import yes from "./swaggy.gif";
import "./App.css";
import brent from './brent.png';
class App extends Component {

  state = {
    count: 6,
    danesCount: 5,
  };

  increaseCount = () => {
    const newCount = this.state.count + 1;
    const danesNewCount = this.state.danesCount - 1;
    this.setState({count: newCount, danesCount: danesNewCount});
    if(this.state.count > 8) {
      alert("Unexpected error, amirite?");
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          {/* <div style={{ alignContent: "center" }}>
            <h1 style={{ paddingTop: 20 }}>Is Login Down?</h1>
            <h3 style={{ paddingTop: 20 }}>Yup, JK. It's up.</h3>
          </div> */}
          <div>
            <h1>Who was the worst fantasy football team in 2019?</h1>
            <h3>Brent Turner (2-11)</h3>
          </div>
          <div>
            <img src={brent} className="brent-logo" />
            {/* <p>Will login ever come back up?</p>
            <button onClick={ this.increaseCount }>
              <p>Click here to see</p>
            </button> */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
