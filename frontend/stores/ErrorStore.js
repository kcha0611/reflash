const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ErrorConstants = require('../constants/ErrorConstants');

let _errors = {};
let _form = '';

const ErrorStore = new Store(Dispatcher);

function clearErrors() {
  _errors = {};
  _form = '';
  ErrorStore.__emitChange();
}

function setErrors(payload) {
  _errors = payload.errors;
  _form = payload.form;
}

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      break;
    default:
      break;
  }
};

ErrorStore.formErrors = function (form) {
  if (form !== _form) {
    return [];
  }
  return _errors;
};

ErrorStore.all = function () {
  let result = {};
  if (_errors === undefined){
    result["base"] = [];
  }
  Object.assign(result, _errors);
  return result;
};

ErrorStore.form = function () {
  return _form;
};

module.exports = ErrorStore;
