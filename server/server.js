global._ = require('lodash');
global.Promise = require('bluebird');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

String.prototype.toObjectId = function() {
  var ObjectId = mongoose.Types.ObjectId;
  return new ObjectId(this.toString());
};

const config = require('./config/config');
const express = require('./config/express');
const app = Promise.promisifyAll(express);
const server = Promise.promisifyAll(require('http').Server(app));


module.exports.run = function (cb) {
  console.log('server - Starting');

  connectToMongoose()
    .then(function () {
      return server.listenAsync(config.express.port);
    })
    .then(function () {
      console.log('server - hosted - http://' + config.express.hostName + ':' + config.express.port);
    })
    .then(cb)
    .catch(function (error) {
      return console.error('server - Error while starting', error);
    });
};


function connectToMongoose() {
  return new Promise(function (resolve, reject) {
    var url = "mongodb://" + config.db.host + ":" + config.db.port + "/" + config.db.name;
    mongoose.connect(url);
    mongoose.connection.once('open', function (err) {
      if (err) return reject(err);
      console.log('mongoose ' + url);
      resolve();
    });
  });
}


module.exports.run();
