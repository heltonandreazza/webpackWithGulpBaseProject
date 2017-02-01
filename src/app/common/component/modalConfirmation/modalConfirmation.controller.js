class ModalConfirmationController {
  /*@ngInject*/
  constructor($uibModalInstance, $scope) {
    this.$scope = $scope;
    this.$uibModalInstance = $uibModalInstance;
  }

  ok() {
    this.$uibModalInstance.close(this.inputModel);
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }
}

export default ModalConfirmationController;
