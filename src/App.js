import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
    <body>
      {/* sidebar and nav */}
      <header>
        <div class="App-header">
          <h1 class="main">Charge Up</h1>
          <h1>Login</h1>
        </div>
      <div className="App-search">
      </div>
        <div className="App-nav">
          <ul>
            <li>
              <a>Start charging</a>
            </li>
            <li>
              <a>Previous charges</a>
            </li>
          </ul>
        </div>
        </header>
        <div className="App-view">
          <div class="map">
            Kartta
          </div>
        </div>
    </body>
  );
 }
}

export  default App;
