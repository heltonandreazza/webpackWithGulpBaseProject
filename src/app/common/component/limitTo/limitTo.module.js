export default angular.module('app.common.component.limit-to', [])
  .directive('limitTo', limitTo)
  .name;

function limitTo() {
  return {
    restrict: "A",
    require: 'ngModel',
    link: function(scope, element, attributes, ngModel) {
      var max = parseInt(attributes.limitTo);

      element.bind('keydown', function(event) {
        if (event.keyCode === 9 || event.keyCode === 8 || event.keyCode === 46 || (event.ctrlKey && event.keyCode !== 86)) {
          return;
        }
        if (['', ngModel.$viewValue].join('').replace(/\D/, '').length >= max) {
          event.preventDefault();
        }
      });
    }
  }
}