const {vehicles} = require('./fleet.js');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 1981;

app.use(cors());

// const vehicles = {
//   "columbia": {
//     "name": "Columbia",
//     "serialNum": "OV-102",
//     "numFlights": 28
//   },
//   "atlantis": {
//     "name": "Atlantis",
//     "serialNum": "OV-104",
//     "numFlights": 33
//   },
//   "challenger": {
//     "name": "Challenger",
//     "serialNum": "OV-099",
//     "numFlights": 10
//   },
//   "discovery": {
//     "name": "Discovery",
//     "serialNum": "OV-103",
//     "numFlights": 39
//   },
//   "endeavour": {
//     "name": "Endeavour",
//     "serialNum": "OV-105",
//     "numFlights": 25
//   },
//   "enterprise": {
//     "name": "Enterprise",
//     "serialNum": "OV-101",
//     "numFlights": 5
//   }

// };

app.get('/', (req, res) => {
  app.set('view engine', 'html');
  app.use(express.static('public'));
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api', (req, res) => {
  res.json(vehicles);
});

app.get('/api/:vehicle', (req, res) => {
  const vehicle = req.params.vehicle.toLowerCase();
  console.log(vehicle);
  if (vehicles[vehicle]) {
    res.json(vehicles[vehicle]);
  } else {
    res.status(404).end();
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Launching server on port ${PORT}`);
});