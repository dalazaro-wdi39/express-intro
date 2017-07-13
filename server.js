// server.js
// SERVER-SIDE JAVASCRIPT
var express = require('express');
var app = express();
app.use(express.static('public'));

var albums = [{
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

var taquerias = [{
    name: "La Taqueria"
  },
  {
    name: "El Farolito"
  },
  {
    name: "Taqueria Cancun"
  }
];

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  console.log(__dirname);
  res.sendFile('views/index.html', {
    root: __dirname
  });
});

app.get('/api/albums', function(req, res) {
  res.json(albums);
});

app.get('/api/taquerias', function(req, res) {
  res.json(taquerias);
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Example app listening at http://localhost:3000/');
});
