import React from 'react';
import './App.css';
import MapsGoogle from './components/MapsGoogle';
import ChargersDD from './components/ChargersDD';
import { Account } from './components/Accounts';
import Signup from './components/Signup';
import Login from './components/Login';
import Status from './components/Status';
import Stopwatch from './components/Timer';

class App extends React.Component {

  render() {
    return (
      <main>
        {/* sidebar and nav */}
        <header>
          <div className="App-header">
            <h1 className="main">Charge</h1>
            <h1 className="main-second">Up</h1>
          </div>
          <div>
            <Account>
              <Status />
              <h2 className="App-login">Login<Login /></h2>
              <h2 className="App-signup">Sign Up<Signup /></h2>
            </Account>
          </div>
          <div className="App-nav">
            <ul>
              <li>
                <p>Start charging</p>
                <Stopwatch />
              </li>
              <li>
                <p>Previous charges</p>
              </li>
            </ul>
          </div>
        </header>
        {/* Main map view and dropdwon list */}
        <body>
          <>
            <ChargersDD />
            <MapsGoogle />
          </>
        </body>
      </main>
    );
  }
}

export default App;