import stateMemoryService from './stateMemory.service';

export default angular
  .module('app.common.state-memory', [])
  .service('stateMemoryService', stateMemoryService)
  .name;