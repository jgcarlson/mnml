'use strict';

// set up ========================
const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const morgan = require('morgan');
const helmet = require('helmet');
const bunyan = require('bunyan');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const app = express();

// configuration =================
mongoose.Promise = global.Promise;
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public/dist')))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());

var log = bunyan.createLogger({
  name: 'myserver',
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res
  }
});
log.info();
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
require('./server/config/passport');
app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendFile(path.resolve("./public/dist/index.html"));
});

// port ==========================
const server = app.listen(5000, () => {
  console.log('------------------------- Server up and running on port 5000 -------------------------')
});
