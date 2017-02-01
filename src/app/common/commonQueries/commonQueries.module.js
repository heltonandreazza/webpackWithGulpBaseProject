import CommonQueriesService from './commonQueries.service';

export default angular
  .module('app.common.common-queries', [])
  .service('commonQueriesService', CommonQueriesService)
  .name;