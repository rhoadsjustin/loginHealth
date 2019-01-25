import React, { Component } from "react";
import logo from "./mario_luigi_dance.gif";
import "./App.css";
// import "primereact/resources/themes/nova-light/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import Chart from "./donutChart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1 style={{ paddingTop: 20 }}>Is Login Down?</h1>
            <h3 style={{ paddingTop: 20 }}>Nope!!!!!!!!!</h3>
          </div>
          {/* <div>
            <p>BUT KYLE's the man and fixed it, so login and keep working ya filthy animals.</p>
            <img src={'https://ca.slack-edge.com/TCD5DF59Q-UCCU9933N-6a3683d6fe28-72'} className="kyle-logo" alt="logo" />

          </div> */}
        </header>
      </div>
    );
  }
}

export default App;
