import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
    <body>
      {/* sidebar and nav */}
      <div class="App-header">
          <h1 class="main">Header</h1>
            <h1>Login</h1>
            <h1>Home</h1>
        </div>
      <div className="App-search">
      </div>
        <div className="App-nav">
          <ul>
            <li>
              <a>Something</a>
            </li>
            <li>
              <a>Something</a>
            </li>
            <li>
              <a>something</a>
            </li>
          </ul>
        </div>
        <div className="App-body">
          Kartta
        </div>

        <div className="App-footer">
            <h2>footer</h2>
    </div>

  </body>
  );
 }
}

export default App;
