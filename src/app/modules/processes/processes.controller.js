class ProcessesCtrl {
  /*@ngInject*/
  constructor(processesService, $state, $q, $http) {
    this.processesService = processesService;
    this.$state = $state;
    this.$q = $q;
    this.$http = $http;

    this.activate();
  }

  activate() {

  }

  conciliar() {
    this.$state.go('stepsBankConciliation');
  }

  desconciliar() {
    this.$state.go('consultLots');
  }

  apurar() {
    this.$state.go('consolidatedCalculation');
  }
}

export default ProcessesCtrl;