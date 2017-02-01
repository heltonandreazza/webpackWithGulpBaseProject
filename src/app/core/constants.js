export default angular
  .module('app.constants', [])
  /**
   * Sets the Multiselect labels to Portuguese language.
   */
  .constant('multiSelectLabels', {
    selectAll: 'Marcar Todos',
    selectNone: 'Desmarcar Todos',
    reset: 'Restaurar',
    search: 'Digite para pesquisar...',
    nothingSelected: 'Nenhum item selecionado'
  })
  /**
   * Array used in multiselects with Nature types C - Crédito / D - Débito
   */
  .constant('natureTypes', [{
    label: 'C - Crédito',
    value: 'Credito'
  }, {
    label: 'D - Débito',
    value: 'Debito'
  }])
  /**
   * Array used in multiselects to filter bank movements by date (enumFiltrarData)
   */
  .constant('filterDates', [{
    'label': 'Data de liberação',
    'value': 'DataLiberacao'
  }, {
    'label': 'Data do movimento',
    'value': 'DataMovimento'
  }])
  /**
   * Array used in multiselects to filter bank movements by status (enumExibirPor)
   */
  .constant('filterStatus', [{
    'label': 'Conciliados',
    'value': 'Conciliados'
  }, {
    'label': 'Não Conciliados',
    'value': 'NaoConciliados'
  }, {
    'label': 'Só Saldos',
    'value': 'SoSaldos'
  }, {
    'label': 'Todos',
    'value': 'Todos',
    'ticked': true
  }])
  /**
   * Array used in multiselects to filter bank movements by status (enumExibirPor)
   */
  .constant('filterStatusJournalEntry', [{
    'label': 'Conciliados',
    'value': 'Conciliados'
  }, {
    'label': 'Não Conciliados',
    'value': 'NaoConciliados'
  }, {
    'label': 'Todos',
    'value': 'Todos',
    'ticked': true
  }])
  /**
   * Array used in multiselects to filter Bank Statements by Origin (EnumOrigemExtrato)
   */
  .constant('filterOrigin', [{
    'label': 'Digitado',
    'value': 0
  }, {
    'label': 'Importado',
    'value': 1
  }, {
    'label': 'Todos',
    'value': 2
  }])
  /**
   * Array used in multiselects to filter Journal Entry by Nature (EnumNatureza)
   */
  .constant('filterNature', [{
    'label': 'Crédito',
    'value': 'Credito'
  }, {
    'label': 'Débito',
    'value': 'Debito'
  }, {
    'label': 'Todos',
    'value': 'Todos'
  }])
  /**
   * Array used in multiselects to filter Journal Entry by date (EnumFiltrarDataExtrato)
   */
  .constant('filterStatementDate', [{
    'label': 'Data efetivação',
    'value': 'dataEfetivacao'
  }, {
    'label': 'Data lançamento',
    'value': 'dataLancamento'
  }])
  /**
   * Array used in multiselects to filter Journal Entry by date (enumOrigemLoteFiltro)
   */
  .constant('originLotFilter', [{
    'label': 'Conciliação manual',
    'value': 'ConciliacaoManual',
    'id': 'ConciliacaoManual'
  }, {
    'label': 'Conciliação por regra de data/documento/valor',
    'value': 'ConciliacaoPorRegraDataDocumentoValor',
    'id': 'ConciliacaoPorRegraDataDocumentoValor'
  }, {
    'label': 'Conciliação por regra de data/valor',
    'value': 'ConciliacaoPorRegraDataValor',
    'id': 'ConciliacaoPorRegraDataValor'
  }, {
    'label': 'Conciliação por regra de documento/valor',
    'value': 'ConciliacaoPorRegraDocumentoValor',
    'id': 'ConciliacaoPorRegraDocumentoValor'
  }, {
    'label': 'Conciliação por regra de movimento estornado',
    'value': 'ConciliacaoPorRegraMovimentoEstornado',
    'id': 'ConciliacaoPorRegraMovimentoEstornado'
  }, {
    'label': 'Conciliação por regra de extrato estornado',
    'value': 'ConciliacaoPorRegraExtratoEstornado',
    'id': 'ConciliacaoPorRegraExtratoEstornado'
  }, {
    'label': 'Todos',
    'value': 'Todos',
    'id': 'Todos'
  }])
  /**
   * Array used in multiselects to filter Journal Entry by date (enumSituacaoLoteFiltro)
   */
  .constant('statusLotFilter', [{
    'label': 'Aguardando efetivacao',
    'value': 'AguardandoEfetivacao',
    'id': 'AguardandoEfetivacao'
  }, {
    'label': 'Efetivo',
    'value': 'Efetivo',
    'id': 'Efetivo'
  }, {
    'label': 'Todos',
    'value': 'Todos',
    'id': 'Todos'
  }])
  /**
   * Array used for multiselects of Import/export layout.
   */
  .constant('filterLayout', [{
    'label': 'Importação tipo 1',
    'value': '1'
  }, {
    'label': 'Importação tipo 2',
    'value': '2'
  }])
  .constant('numbers', {
    MAX_QUANTITY: 999
  })
  .name;