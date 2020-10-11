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
  constructor(props) {
    super(props);
    this.state = {
      charger: [],
      chargerSearchString: ""
    }
  }

  componentDidMount() {
    axios.get('http://3.91.205.54/chargers')
      .then(response => {
        console.log(response);
        this.setState({ charger: response.data.chargers })
      })
      .catch((err) => console.log(err));
  }

  toLowerCase = () => {
    const lowerCase = this.state.chargerSearchString.toLowerCase();
    this.setState({
      chargerSearchString: lowerCase
    });

  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ toLowerCase: event.target.value });
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
        <body>
          <div className="Map">
             <>
              <ChargersDD />
              <MapsGoogle />
            </>
          </div>
          <div className="Map-view">
            {/*<SearchView chargers={this.state.charger.filter((charger) => charger.name.includes(this.state.toLowerCase))} /> */}
          </div>
        </body>
      </main>
    );
  }
}

export default App;