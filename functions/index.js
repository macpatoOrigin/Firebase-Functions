const functions         = require('firebase-functions');
const app               = require('express')(); 
const api2              = require('./api/api2');

app.get('/', (req, res) => {
  res.send(`Root page`);
});

app.get('/second', (req, res) => {
  res.send(`Sub function`);
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

//ROUTES
exports.api             = functions.https.onRequest(app);
exports.api2            = functions.https.onRequest(api2);