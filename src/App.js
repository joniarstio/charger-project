import React from 'react';
import './App.css';
import axios from 'axios';
import MapsGoogle from './components/MapsGoogle';
import ChargersDD from './components/ChargersDD';
import { Account } from './components/Accounts';
import Signup from './components/Signup';
import Login from './components/Login';
import Status from './components/Status';
import Stopwatch from './components/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charger: [],
      chargerSearchString: ""
    }
  }

  componentDidMount() {
   {/* Joni axios.get('http://3.91.205.54/chargers') */}
   {/* Venla */}
   axios.get('http://54.84.83.147/chargers')
      .then(response => {
        console.log(response);
        this.setState({ charger: response.data.chargers })
      })
      .catch((err) => console.log(err));
  }


  render() {
    return (
      <main>
        {/* sidebar and nav */}
        <header>
          <div className="App-header">
            <h1 className="main">Charge</h1>
            <h1 className="main-second">Up</h1>
          </div>
          <div className="App-search">
            <input type="text" onChange={this.onSearchChange} value={this.state.toLowerCase} />
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
          <div className="Map-view">
             <>
              <ChargersDD />
              <MapsGoogle />
            </>
          </div>
        </body>
      </main>
    );
  }
}

export default App;