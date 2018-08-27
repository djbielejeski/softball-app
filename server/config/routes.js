const homeController = require('../controllers/home.controller');

const leagueController = require('../controllers/league.controller');
const teamController = require('../controllers/team.controller');
const playerController = require('../controllers/player.controller');

module.exports.http = function (app) {
  // Build the bindings between each route and their controller
  app.get('/', homeController.index);

  // api
  createRoutesForPath(app, '/api/league', leagueController.controller);
  createRoutesForPath(app, '/api/teams', teamController.controller);
  createRoutesForPath(app, '/api/players', playerController.controller);
};

function createRoutesForPath(app, path, controller){
  app.get(path, controller.get);
  app.get(path + '/:id', controller.getById);
  app.post(path, controller.post);
  app.delete(path + '/:id', controller.delete);
}
