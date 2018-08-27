var model = require('../models/team.model');
var baseApi = require('./base.controller');

module.exports.controller = baseApi.createApiController(model);
