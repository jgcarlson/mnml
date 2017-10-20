// server/models/model.js
// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      unique: true
    },
    password: {
      type: String,
      trim: true
    },
    notes: [
      {
        type: ObjectId,
        ref: 'Note'
      }
    ]
  },
  { timestamps: true }
);

UserSchema.pre('save', function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(password, hash) {
  bcrypt
    .compare(password, hash)
    .then(data => {
      return data;
    })
    .catch(data => console.log('Error in compare hash: ', err));
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000)
    },
    'KEEPITSECRET.KEEPITSAFE.'
  ); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('User', UserSchema);
