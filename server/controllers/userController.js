// server/controllers/controller.js
// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');

module.exports = {

  createUser: (req, res) => {
    User.findOne({email: req.body.email}, (err, newUser) => {
      if (err) return res.json({error: '1Something went wrong.'});
      if (!newUser) {
        let user = new User({email: req.body.email, password: req.body.password}, (err, success) => {
          if (err) {
            return res.json({error: '2Something went wrong.'});
          } else {
            console.log('New user created.');
          }
        });
        user.save( (err, user) => {
          if (err) {
            res.json({error: '3Something went wrong.'});
          } else {
            res.json({success: 'Your account has been created.'});
          }
        });
      } else {
        return res.json({error: '4That email is associated with an existing account.'});
      }
    });
  },

  loginUser: (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
      if (err) {
        console.log(err)
        res.json({error: 'Something went wrong.'});
      } else if (!user) {
        console.log('not registered')
        res.json({error: 'Something went wrong.'});
      } else {
        console.log('User entered: ' + req.body.password);
        console.log('User hash: ' + user.password);
        bcrypt.compare(req.body.password, user.password)
        .then(data => {
          if (data) {
            let token = user.generateJwt();
            res.json({'token': token});
          } else {
            res.json({error: 'Nope. Try again.'});
          }
        })
        .catch(data => console.log('Error in compare hash: ', err))
      }
    })
  }

}
