import component from './component/component.module';
import permission from './permission/permission.module';
import commonQueries from './commonQueries/commonQueries.module';
import utils from './utils/utils.module';
import stateMemory from './stateMemory/stateMemory.module';

export default angular
  .module('app.common', [
    component,
    permission,
    commonQueries,
    utils,
    stateMemory
  ])
  .name;