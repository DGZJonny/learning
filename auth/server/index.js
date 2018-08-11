const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB setup
// mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect("mongodb://localhost:27017/auth", { useNewUrlParser: true });

mongoose.connection.once('connected', function() {
    console.log("Connected to database")
});

// app setup
// any incoming request will be passed to app.use - middleware
app.use(morgan('combined'));  //logging framework (mostly used for debugging)
app.use(bodyParser.json({ type: '*/*' })); // parse incomming requests as json
router(app);



// server setup
const port = process.env.PORT || 3090; // if there is env var of port use it else use 3090
const server = http.createServer(app); // create an http server that knows how to recieve requests and anything that comes in forward it to express application
server.listen(port);
console.log('Server listening on: ', port);
