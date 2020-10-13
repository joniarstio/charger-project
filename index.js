const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const passportHttp = require('passport-http');
const chargerData = require('./data.json');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

let users = [];
let chargerOperations = [{
    startTime: null,      // Starting time of charging
    stopTime: null,       // Stopping time of charging
    totalTime: 0,         // Total time in seconds 
    userID: null,         // ID of the user 
    chargerID: null,      // ID of the charger
    totalCosts: 0,        // Total costs in €
    electricityUsed: 0    // Total kWh used
}];

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/register', (req, res) => {
  console.log(req.body);

  const passwordHash = bcrypt.hashSync(req.body.password, 8);

  users.push({
    id: uuidv4(),
    username: req.body.username,
    password: passwordHash,
    email: req.body.email,
  });

  res.sendStatus(200);
});

app.get('/users', (req, res) => {
  res.json(users);
});

passport.use(new passportHttp.BasicStrategy(function(username, password, done) {
  const userResult = users.find(user => user.username === username);
  if(userResult == undefined) {
    return done(null, false);
  }

  if(bcrypt.compareSync(password, userResult.password) == false)
  {
    return done(null, false);
  }

  done(null, userResult);

}));

// This one should be protected with HTTP Basic
app.post('/login', passport.authenticate('basic', { session: false }), (req, res) => {
  console.log(req.user);
  res.sendStatus(200);
});

app.post('/hidden', passport.authenticate('basic', { session: false }), (req, res) => {
  console.log(req.user);
  res.sendStatus(200);
});

/** Get data of all chargers */
app.get('/chargers', (req, res) => {
  res.json(chargerData.chargers);
})

app.post('/charger/:id/startCharge', passport.authenticate('basic', { session: false }), (req, res) => { 
  chargerOperations.push(startTime, stopTime, totalTime, userID, chargerID, totalCosts, electricityUsed);
})

app.post('/charger/:id/stopCharge', passport.authenticate('basic', { session: false }), (req, res) => { 
  chargerOperations.push(startTime, stopTime, totalTime, userID, chargerID, totalCosts, electricityUsed);
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
