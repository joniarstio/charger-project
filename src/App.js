import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <h1>Header</h1>
            <h1>Login</h1>
            <h1>Home</h1>
        </div>
      <div className="App-search">
      </div>
        <div className="App-body">
          <div className="App-menu">
              <ul>
               <a>Something</a>
               <a>Something</a>
              <a>something</a>
              </ul>
          </div>
        </div>
        <div className="App-footer">
            <h2>footer</h2>
    </div>
    </div>
  );
 }
}

export default App;
