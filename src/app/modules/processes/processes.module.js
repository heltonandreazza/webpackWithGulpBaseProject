import ProcessesController from './processes.controller';
import ProcessesService from './processes.service';
import configRoute from './config.route';

export default angular
  .module('app.processes', [])
  .controller('ProcessesController', ProcessesController)
  .service('processesService', ProcessesService)
  .config(configRoute)
  .name;