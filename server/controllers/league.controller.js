var model = require('../models/league.model');
var baseApi = require('./base.controller');

module.exports.controller = baseApi.createApiController(model);
