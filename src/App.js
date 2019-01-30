import React, { Component } from "react";
import logo from "./cryingLogo.png";
import yes from './mario_luigi_dance.gif';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ alignContent: 'center'}}>
            <h1 style={{ paddingTop: 20 }}>Is Login Down?</h1>
            <h3 style={{ paddingTop: 20 }}>Yup</h3>
          </div>
          <div>
            <p>Pi Basketball Scoreboard:</p>
            <ul style={{ listStyle: 'none', alignItems: 'center' }}>
              <li>Dane: 3</li>
              <li>Justin: 3</li>
              <li>Joe: 1</li>
              <li>Brent: 0</li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
