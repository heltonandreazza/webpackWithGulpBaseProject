class CommonQueriesService {
  /*@ngInject*/
  constructor($http, $q, SERVER, toastrService, $filter, numbers, imageService) {
    this.$filter = $filter;
    this.$http = $http;
    this.$q = $q;
    this.url = SERVER.url;
    this.toastrService = toastrService;
    this.numbers = numbers;
    this.imageService = imageService;
    this.pagination = {
      pagina: 1,
      numeroRegistrosPagina: 10,
      listaOrdenacao: [{
        campo: "id",
        ordenacao: "Asc"
      }]
    };
  }

  /**
   * Retrieves the companies data for Multi-select component.
   * @param {Boolean} selectAll - Selects all the Multi-select items (Default is false).
   * @param {Number} offset - The pagination number (Default is 1).
   * @param {Number} quantity - Amount of records that should be returned (Default is 999).
   * @returns {Object} - The multi-select data object, ready to be used.
   */
  getCompanies({ selectAll = true, offset = 1, quantity = this.numbers.MAX_QUANTITY } = {}) {
    return this.$http({
        method: 'POST',
        url: this.url.QUERIES + 'obterEmpresas',
        data: {
          offset,
          quantidade: quantity
        }
      })
      .then(response => {
        const data = this.customData(response.data);
        return data.listaEmpresas;
      })
      .catch(error => {
        this.toastrService.error('Não foi possível carregar as empresas. Tente novamente.', error.status);
        return this.$q.reject(error);
      });
  }

  /**
   * Creates a new array based on the companies array and retrieves the branches
   * data for the branches Multi-select component.
   * @param {Array} companies - The companies Multi-select object list.
   * @param {Boolean} selectAll - Selects all the Multi-select items (Default is false).
   * @param {Number} offset - The pagination number (Default is 1).
   * @param {Number} quantity - Amount of records that should be returned (Default is 999).
   * @returns {Object} - The multi-select data object, ready to be used.
   */
  getBranches({ companies, companiesIds, selectAll = true, offset = 1, quantity = this.numbers.MAX_QUANTITY }) {
    let empresaId = companies ? companies.map(o => o.id) : (Array.isArray(companiesIds) ? companiesIds : [companiesIds]);
    return this.$http({
        method: 'POST',
        url: this.url.QUERIES + 'obterFiliaisEmpresa',
        data: {
          offset,
          empresaId,
          quantidade: quantity,
        }
      })
      .then(response => {
        const data = response.data;
        data.filial = data.filial.map(({ id, empresaId: { id: empresaId }, filial, agrupamento: { agrupamentoId } = {}, nome, cidade, estado }) => {
          return {
            id: id,
            empresaId: empresaId,
            filial: filial,
            agrupamento: agrupamentoId,
            nome: nome,
            cidade: cidade,
            estado: estado
          };
        });

        data.filial.forEach(object => {
          object.showing = [
            'Emp.: ', object.empresaId,
            ' - Filial: ', object.filial,
            ' - ', object.nome
          ].join('');
          object.ticked = selectAll;
        });
        return data.filial;
      })
      .catch(error => {
        this.toastrService.error('Não foi possível carregar as filiais. Tente novamente.', error.status);
        return this.$q.reject(error);
      });
  }

  customData(array, selectAll) {
    array.forEach(object => {
      object.showing = object.id + ' - ' + object.nomeFantasia;
      object.ticked = selectAll;
    });
  }

}
export default CommonQueriesService;