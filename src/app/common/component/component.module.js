import modalConfirmation from './modalConfirmation/modalConfirmation.module';
import limitTo from './limitTo/limitTo.module';
import uiNumberMask from './uiNumberMask/uiNumberMask.module';
import whenScrolled from './whenScrolled/whenScrolled.module';
import getInputProp from './getInputProp/getInputProp.module';

export default angular
  .module('app.common.component', [
    modalConfirmation,
    limitTo,
    uiNumberMask,
    whenScrolled,
    getInputProp
  ])
  .name;
