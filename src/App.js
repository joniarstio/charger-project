import React from 'react';
import axios from 'axios';
import './App.css';
import SearchView from './components/ChargerSearchView';



class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      charger: [],
      chargerSearchString: ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/chargers')
      .then(response => {
        console.log(response);
        this.setState({ charger: response.data.chargers})
      })
      .catch((err) => console.log(err));
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ chargerSearchString: event.target.value });
  }

  render() 
  {
    return (
    <main>
      {/* sidebar and nav */}
      <header>
        <div className="App-header">
          <h1 className="main">Charge</h1>
          <h1 className="main-second">Up</h1>
        </div>
        <div className="App-search">
          <input type="text" onChange={this.onSearchChange} value={this.state.chargerSearchString}/>
        </div>
        <div className="App-regAndlog">
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
      <div className="App-view">
        <div className="Map">
          <SearchView chargers={this.state.charger.filter((charger) => charger.name.includes(this.state.chargerSearchString))} />
        </div>
      </div>
    </main>
  );
 }
}

export  default App;
