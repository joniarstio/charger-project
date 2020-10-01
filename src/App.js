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
          <h1 class="main">Charge</h1>
          <h1 class="main-second">Up</h1>
        </div>
      <div class="App-search">
      </div>
      <div class="App-regAndlog">
        <h2>Login</h2>
        <h2>Sing Up</h2>
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
        <main>
        <div className="App-view">
          <div class="Map">
          </div>
        </div>
      </main>
    </body>
  );
 }
}

export  default App;
