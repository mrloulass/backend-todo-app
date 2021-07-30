'use strict';

require('dotenv').config;

const {db} = require('./indexModel.js');

const server = require('./server.js');

const PORT = process.env.PORT || 3001;

db.sync().then(()=> {
  server.start(PORT);
});
