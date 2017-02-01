import PermissionService from './permission.service';

export default angular
  .module('app.common.permission', [])
  .service('permissionService', PermissionService)
  .name;