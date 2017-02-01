//external libs
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import angularToastr from 'angular-toastr';
import ngResource from 'angular-resource';
import angularUiBootstrap from 'angular-ui-bootstrap';
import ngTouch from 'angular-touch';
import angularUiMask from 'angular-ui-mask';
import angularInputMasks from 'angular-input-masks';
import ngFileUpload from 'ng-file-upload';
import ngCookies from 'angular-cookies';
import angularTranslate from 'angular-translate';
//internal livs
import constants from './constants';
import toastr from './toastr/toastr.module';
import image from './image/image.module';

export default angular
  .module('app.core', [
    //external libs
    uiRouter,
    ngAnimate,
    angularToastr,
    ngResource,
    angularUiBootstrap,
    ngTouch,
    angularUiMask,
    angularInputMasks,
    ngFileUpload,
    ngCookies,
    angularTranslate,
    //senior libs
    'senior.lib',
    'senior-simple-grid',
    'senior.lookup',
    //internal libs
    constants,
    toastr,
    image
  ])
  .config(configTranslate)
  .config(configRoutes)
  .run(runSetup)
  .name;

/**
 * setup permission and url server config
 */
/*@ngInject*/
function runSetup(SERVER, $q) {
  const config = {
    domain: 'erp_fceb/',
    service: 'fceb_conciliacaobancaria/',
    resource: ['banco', 'agencia', 'conta-interna']
  }

  //set server default for dev
  let server = "http://teste11:9090/bridge/rest/";
  if (SERVER.url.indexOf('localhost') === -1) {
    //If didn't found localhost set server from platform's cookie 
    server = SERVER.url;
  }

  let url = {
    QUERIES: server + config.domain + config.service + 'queries/',
    ENTITIES: server + config.domain + config.service + 'entities/',
    ACTIONS: server + config.domain + config.service + 'actions/'
  }

  // Override some SERVER values
  angular.extend(SERVER, config, url ? { url, getPermissionTo } : {});
}

/*@ngInject*/
function configTranslate($translateProvider, $httpProvider) {
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.translations('pt_BR', {
    "ConciliacaoManual": "Conciliação manual",
    "ConciliacaoPorRegraDataDocumentoValor": "Conciliação por regra data/documento/valor",
    "ConciliacaoPorRegraDataValor": "Conciliação por regra data/valor",
    "ConciliacaoPorRegraDocumentoValor": "Conciliação por regra documento/valor",
    "ConciliacaoPorRegraMovimentoEstornado": "Conciliação por regra movimento estornado",
    "ConciliacaoPorRegraExtratoEstornado": "Conciliação por regra extrato estornado",
    "Debito": "Débito",
    "Credito": "Crédito",
    "ConciliacaoManual": "Conciliação manual",
    "ConciliacaoPorRegraDataDocumentoValor": "Conciliação por regra de data/documento/valor",
    "ConciliacaoPorRegraDataValor": "Conciliação por regra de data/valor",
    "ConciliacaoPorRegraDocumentoValor": "Conciliação por regra de documento/valor",
    "ConciliacaoPorRegraMovimentoEstornado": "Conciliação por regra de movimento estornado",
    "ConciliacaoPorRegraExtratoEstornado": "Conciliação por regra de extrato estornado",
    "AguardandoEfetivacao": "Aguardando efetivação"
  });
  $translateProvider.preferredLanguage('pt_BR');
}

/*@ngInject*/
function configRoutes($urlRouterProvider) {
  $urlRouterProvider.otherwise('processes');
}

// Aux functions to runSetup
function getPermissionTo(action, config) {
  let deferred = $q.defer();
  let permission = {};
  // If the action is an array return an object with all the requested permissions. Otherwise, just return a plain 'true' value
  if (angular.isArray(action)) {
    action.forEach(ac => {
      permission[ac.toLowerCase()] = true;
    });
  } else {
    permission = true;
  }
  deferred.resolve(permission);
  return deferred.promise;
}