import ToastrService from './toastr.service';
import toastrConfig from './toastr.config';

export default angular
  .module('app.core.toastr', [])
  .service('toastrService', ToastrService)
  .config(toastrConfig)
  .name;