import ModalConfirmationController from './modalConfirmation.controller';
import ModalConfirmation from './modal-confirmation.directive';

export default angular
  .module('app.common.component.modal-confirmation', [])
  .controller('ModalConfirmationController', ModalConfirmationController)
  .directive('modalConfirmation', ModalConfirmation)
  .name;
