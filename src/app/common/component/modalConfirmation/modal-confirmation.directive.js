/*@ngInject*/
function modalConfirmation($uibModal) {
    var directive = {
        restrict: 'A',
        scope: {
            confirmationClick: '&',
            item: '=',
            confirmationDisabled: '=',
            confirmationType: '@',
            title: '@',
            showInput: '@',
            inputModel: '=',
            inputLabel: '@'
        },
        link: link
    };
    return directive;

    function link(scope, element, attrs) {
        element.on('click', () => {
            if (!scope.confirmationDisabled) {
                scope.message = attrs.modalConfirmation;

                const modalInstance = $uibModal.open({
                    templateUrl: 'modalConfirmation.html',
                    controller: 'ModalConfirmationController',
                    controllerAs: 'vm',
                    bindToController: 'true',
                    scope: scope
                });

                modalInstance.result
                    .then((result) => {
                        scope.confirmationClick({ inputModel: result });
                    }, () => {
                        //Modal dismissed
                    });
            } else {
                scope.confirmationClick({ inputModel: result });
            }
        });
    }
}

export default modalConfirmation;
