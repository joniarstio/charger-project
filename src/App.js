import React from 'react';
import './App.css';
import SearchView from './components/ChargerSearchView';
import data from './data.json'


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      chargers: data.chargers,
      chargerSearchString: ""
    }
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
            <SearchView chargers={this.state.chargers.filter((charger) => charger.name.includes(this.state.chargerSearchString))} />
          </div>
        </div>
      </main>
  );
 }
}

export  default App;
