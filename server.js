const express = require('express');
const path = require('path');
const app = express();
const events = require('./events.json');

let port = process.env.PORT || 8080;
let cors = require('cors')


// the __dirname is the current directory from where the script is running
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')));
app.options('*', cors()) // include before other routes
app.use(cors())

app.get('/get/events', function (req, res) {
 res.json(events)
});

app.get('/get/event/:id', function (req, res) {
  const event = events.find(event => event.id === req.params.id)
  res.json(event)
 });

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log('listen to: http://localhost:'+port)
app.listen(port);
