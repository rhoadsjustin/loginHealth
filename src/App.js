import React, { Component } from "react";
import logo from "./cryingLogo.png";
import yes from "./swaggy.gif";
import "./App.css";

class App extends Component {

  state = {
    count: 6,
    danesCount: 5,
  };

  increaseCount = () => {
    const newCount = this.state.count + 1;
    const danesNewCount = this.state.danesCount - 1;
    this.setState({count: newCount, danesCount: danesNewCount});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <img src={yes} className="App-logo" alt="logo" />
          {/* <div style={{ alignContent: "center" }}>
            <h1 style={{ paddingTop: 20 }}>Is Login Down?</h1>
            <h3 style={{ paddingTop: 20 }}>Yup, JK. It's up.</h3>
          </div> */}
          <div>
            <p>Pi Basketball Scoreboard:</p>
            <ul style={{ listStyle: "none", alignItems: "center" }}>
              <li>
                Justin: {this.state.count} <img src={yes} style={{ height: 30, width: 30 }} />
              </li>
              <li>Dane: {this.state.danesCount} <img src={logo} style={{ height: 30, width: 30 }} /> </li>
              <li>Joe: 1</li>
              <li>Brent: 0</li>
            </ul>
          </div>
          <div>
            <p>Will the Pay Server ever come back up?</p>
            <button onClick={ this.increaseCount }>
              <p>Click here to see</p>
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
