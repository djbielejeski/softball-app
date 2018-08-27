var model = require('../models/player.model');
var baseApi = require('./base.controller');

module.exports.controller = baseApi.createApiController(model);
