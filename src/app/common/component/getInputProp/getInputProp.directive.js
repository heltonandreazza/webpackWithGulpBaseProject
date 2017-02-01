/*@ngInject*/
function getInputProp() {
    const directive = {
        require: 'ngModel',
        scope: {
            model: '=ngModel',
            singleMode: '@'
        },
        link: (scope, element, attributes, ngModel) => {
            const $input = angular.element('<input>', {
                type: 'input'
            });
            const input = $input.get(0);

            ngModel.$render = () => {
                if (!ngModel.$modelValue) {
                    return;
                }
                let currentValue = ngModel.$modelValue;
                let newValue = currentValue.map(o => o[attributes.getInputProp]);
                if (attributes.singleMode == 'true' && newValue.length) {
                    newValue = newValue[0];
                }
                ngModel.$setViewValue(newValue);
            };
        }
    };
    return directive;
}

export default getInputProp;