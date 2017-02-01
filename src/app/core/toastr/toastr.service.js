class ToastrService {
  /*@ngInject*/
  constructor(toastr) {
    this.toastr = toastr;
  }

  /**
   * Shows a success toast to the user.
   * @param {String} message - The success message to be shown.
   * @param {String} title - The message title.
   */
  success(message, title) {
    this.toastr.success(message, title);
  }

  /**
   * Shows a warning toast to the user.
   * @param {String} message - The message to be shown.
   * @param {String} title - The message title.
   */
  warning(message, title) {
    this.toastr.warning(message, title, { timeOut: 0, extendedTimeOut: 0, maxOpened: 1 });
  }

  /**
   * Shows a info toast to the user.
   * @param {String} message - The message to be shown.
   * @param {String} title - The message title.
   */
  info(message, title) {
    this.toastr.info(message, title);
  }

  /**
   * Shows an error toast to the user. The title of the toast will be the status
   * code message.
   * @param {String} message - The error message to be shown.
   * @param {Number} status - The error status code.
   */
  error(message, status) {
    let errorMessage = '';
    switch (status) {
      case 504:
        errorMessage = 'O servidor não está respondendo.';
        break;
      case 503:
        errorMessage = 'O servidor não está respondendo.';
        break;
      case 500:
        errorMessage = 'Erro interno do servidor.';
        break;
      case 429:
        errorMessage = 'O servidor não conseguiu atender a todas as requisições.';
        break;
      case 403:
        errorMessage = 'Usuário sem permissão para executar esta operação.';
        break;
      case 401:
        errorMessage = 'Credenciais de usuário inválidas.';
        break;
      default:
        errorMessage = 'Erro ' + (status ? status : '');
    }
    this.toastr.error(message, errorMessage, { timeOut: 0, extendedTimeOut: 0, maxOpened: 1 });
  }
}

export default ToastrService;