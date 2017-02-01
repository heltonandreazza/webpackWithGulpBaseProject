export default angular.module('app.common.component.ui-number-mask', [])
  .directive('uiNumberMask', function() {
    var max = 18;
    return {
      require: 'ngModel',
      link: function(scope, element, attributes, ngModel) {
        element.bind('keydown', function(event) {
          if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 97 || event.keyCode > 105)) {
            return;
          }
          if (['', ngModel.$viewValue].join('').replace(/\D/, '').length >= max) {
            event.preventDefault();
          }
        });
      }
    };
  }).name;