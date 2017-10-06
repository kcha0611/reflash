import ErrorConstants from '../constants/ErrorConstants';
import Dispatcher from '../dispatcher/dispatcher';

module.exports = {
  setErrors(form, errors) {
    Dispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      errors,
      form,
    });
  },
  clearErrors() {
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
    });
  }
}
