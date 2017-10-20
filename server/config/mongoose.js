// server/config/mongoose.js
// This is the file that connects to the database and loads all of the models.
// Here we specify a database to connect to and the path where all of our models are.
// This file is required by server.js.

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
mongoose.connect('mongodb://localhost/default', {  // add db after 'localhost/'
  useMongoClient: true
});
const models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach((file) => {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
