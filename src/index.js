const express = require('express');
const bodyParser = require('body-parser');
const chargerData = require('./data.json');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('Hello World!')
})

/** Get data of all chargers */
app.get('/chargers', (req, res) => {
  res.json(chargerData.chargers);
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})