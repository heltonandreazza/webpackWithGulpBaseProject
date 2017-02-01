class Permission {
  /*@ngInject*/
  constructor($http, $q, $state, toastrService, SERVER) {
    this.$http = $http;
    this.$q = $q;
    this.$state = $state;
    this.toastrService = toastrService;
    this.SERVER = SERVER;
  }

  getPermissions(service) {
    const config = {
      domain: 'erp_fceb/',
      service: 'fceb_conciliacaobancaria/',
      resource: service
    };
    const deferred = this.$q.defer();

    this.SERVER.getPermissionTo([
        'Visualizar',
        'Editar',
        'Processar',
        'Excluir',
        'Efetivar',
        'Desconciliar'
      ], config)
      .then(data => {
        const permissions = {
          edit: data.editar,
          create: data.processar,
          delete: data.excluir,
          view: data.visualizar,
          effective: data.efetivar,
          unconciliate: data.desconciliar
        };

        if (!permissions.view) {
          this.$state.go('forbidden');
          deferred.reject({});
        } else {
          deferred.resolve(permissions);
        }
      })
      .catch(error => {
        this.toastrService.error('Não foi possível buscar permissões de usuário. Tente novamente.', error.status);
        this.$q.reject(error);
      });

    return deferred.promise;
  }

  getBank() {
    return this.getPermissions('banco');
  }

  getConciliation() {
    return this.getPermissions('conciliacao-bancaria');
  }

  getBankMovement() {
    return this.getPermissions('movimento-tesouraria');
  }

  getCategoryStatement() {
    return this.getPermissions('categoria-extrato');
  }

  getAgency() {
    return this.getPermissions('agencia');
  }

  getBankStatement() {
    return this.getPermissions('extrato-bancario');
  }

  getInternalAccount() {
    return this.getPermissions('conta-interna');
  }

  getParametrization() {
    return this.getPermissions('parametrizacao');
  }
}

export default Permission;