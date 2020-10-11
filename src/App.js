import React from 'react';
import './App.css';
import MapsGoogle from './components/MapsGoogle';
import ChargersDD from './components/ChargersDD';

class App extends React.Component {

  render() {

    return (
    <main>
      {/* Header and side navigation */}
      <header>
        <div className="App-header">
          <h1 className="main">Charge</h1>
          <h1 className="main-second">Up</h1>
        </div>
        <div className="App-regAndlog">
          <h2>Login</h2>
          <h2>Sing Up</h2>
        </div>
        <ul>
          <li className="App-nav">
            <p>Start charging</p>
          </li>
          <li>
            <p>Previous charges</p>
          </li>
        </ul>
        </header>        
      <body>
      <>
      <ChargersDD />
      <MapsGoogle />
      </>
      <div className="Search-view">
      </div>
      </body>
    </main>
  );
 }
}


export default App;