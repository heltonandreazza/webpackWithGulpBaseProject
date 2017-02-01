/*@ngInject*/
function toastrConfig(toastrConfig) {
  angular.extend(toastrConfig, {
    autoDismiss: true,
    closeButton: true,
    containerId: 'toast-container',
    maxOpened: 3,
    tapToDismiss: true,
    newestOnTop: true,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    preventOpenDuplicates: true,
    target: 'body'
  });
}

export default toastrConfig;