class ProcessesService {
  /*@ngInject*/
  constructor($http, $q, SERVER, toastrService, numbers) {
    this.$http = $http;
    this.$q = $q;
    this.url = SERVER.url;
    this.toastrService = toastrService;
    this.numbers = numbers;
  }
}

export default ProcessesService;