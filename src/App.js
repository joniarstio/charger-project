import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MapsGoogle from './components/MapsGoogle';
import ChargersDD from './components/ChargersDD';
import LoginView from './components/LoginView';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedView from './components/ProtectedView';
import Auth from './components/Auth';
import constants from './constants.json';
import Stopwatch from './components/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chargers: [],
      isAuthenticated: false,
    }
  }


  componentDidMount() {
    axios.get('http://54.84.83.147/chargers')
      .then(response => {
        console.log(response);
        this.setState({ charger: response.data.chargers })
      })
      .catch((err) => console.log(err));
  }

  onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("Login failed");
  }

  loadProtectedData = () => {
    axios.get(constants.baseAddress + '/chargers', Auth.getAxiosAuth()).then(results => {
      this.setState({ someData: results.data.chargers });
    })
  }

  storeUserInfo = (email, password,) => {
    this.setState({
      userInfo: {
        email,
        password
      }
    });
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
          <div>
            <p>The greatest e-car charging station platform.</p>
            <p>You can browse stations by map or from the dropdown menu. Select your station and start charging</p>
          </div>
          <br></br>
          <hr></hr>
          <div>
            <Router>
              <Route path="/" exact render={
                (routeProps) =>
                  <LoginView
                    loginSuccess={this.onLogin}
                    loginFail={this.onLoginFail}
                    userInfo={this.state.userInfo}
                    redirectPathOnSuccess="/"
                    {...routeProps}
                  />
              } />
              <br></br>
              <hr></hr>
              <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/" exact render={
                (routeProps) =>
                  <ProtectedView
                    loadProtectedData={this.loadProtectedData}
                  //someData={this.state.someData}
                  />
              }><Stopwatch />
              </ProtectedRoute>
            </Router>
          </div>
        </header>
        {/* Main map view and dropdwon list */}
        <body>
          <>
            <ChargersDD />
            <br/>
            <MapsGoogle />
          </>
        </body>
      </main>
    );
  }
}

export default App;