// server/config/routes.js
// This is the file that specifies which routes will be handled and by which controller methods.
// From routes.js we require the controller file (or files).

const mongoose = require('mongoose');
const users = require('./../controllers/userController.js');
const notes = require('./../controllers/noteController.js');

module.exports = app => {
  app.post('/api/register', users.createUser);
  app.post('/api/login', users.loginUser);
  app.post('/api/updateNote', notes.updateNote);
};
