/* @ngInject */
function configRoute($stateProvider) {
  $stateProvider
    .state('processes', {
      url: '/processes',
      templateUrl: 'processes.html',
      controller: 'ProcessesController',
      controllerAs: 'vm'
    });
}

export default configRoute;