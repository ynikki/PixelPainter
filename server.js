const mongoose = require('mongoose');
const express = require('express');
const app = express();


const MONGO_URL ='mongodb://localhost/pixel-painter';
mongoose.connect(MONGO_URL);

const PORT = 8080;
mongoose.connection.once('open', function () {
  console.log('connected');

  const server = app.listen(PORT, function () {
    console.log(`Listening on ${server.address().port}`);
  });
});