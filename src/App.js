import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="photo">
          <div className="spacer"></div>
          <div className="App-header">
            <h1>Happy Erik Appreciation Day!!</h1>
          </div>
          <div id="intro">
            <h2 className="App-intro">
              Thank you for supporting me<br></br>while I become a one-handed hacker.<br></br>I appreciate you!</h2>
          </div>
        </div>
        <div className="outer-middle">
          <div className="middle">
            <h1><em>The Plan:</em></h1>
            <ol>
              <li><h3>We brunch</h3></li>
              <li><h3>A brunch game (Erik's choice)</h3></li>
              <li><h3>Massage hour</h3></li>
              <li><h3>Pack/depart for a night of adventure</h3></li>
              <li><h3>Enjoy various <span className="blue">surprise</span> and possibly <span className="red">surprising</span> activities...</h3></li>
              <li><h3>Awaken and breakfast in a locale with <span className="green"> _cable TV_ </span></h3></li>
            </ol>
          </div>
        </div>
        <div className="photo2">
          <div className="spacer2"></div>
        </div>
        <div className="footer">
          <div className="end">
            <h1>It's going to be awesome!!</h1>
            <h3>(Just like you)</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
