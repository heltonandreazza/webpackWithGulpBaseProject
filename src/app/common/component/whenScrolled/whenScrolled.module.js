export default angular.module('app.common.component.when-scrolled', [])
    .directive('whenScrolled', function() {
        return function(scope, elm, attr) {
            var raw = elm[0];

            elm.bind('scroll', function() {
                if (raw.scrollTop + raw.offsetHeight >= (raw.scrollHeight - 1)) {
                    scope.$apply(attr.whenScrolled);
                }
            });
        };
    }).name;