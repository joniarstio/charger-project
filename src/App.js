import React from 'react';
import axios from 'axios';
import './App.css';
import SearchView from './components/ChargerSearchView';
import MapsGoogle from './components/MapsGoogle';



class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      charger: [],
      chargerSearchString: "",
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/chargers')
      .then(response => {
        console.log(response);
        this.setState({ chargers: response.data.chargers})
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
  
  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  
  render() 
  {
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
        <ul >
          <li className="App-nav">
              <p>Start charging</p>
          </li>
            <li>
              <p>Previous charges</p>
          </li>
        </ul>
        <div>
        <SearchView chargers={this.state.charger.filter((charger) => charger.name.includes(this.state.toLowerCase))} />
      </div>
      </header>
      <body>
      <input type="text" onChange={this.onSearchChange} value={this.state.toLowerCase} />
      <form onSubmit={this.handleSubmit}>
     
      </form>
      <>
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