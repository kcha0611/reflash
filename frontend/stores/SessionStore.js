const Dispatcher = require('../dispatcher/dispatcher');
const hashHistory = require('react-router').hashHistory;
const SessionConstants = require('../constants/SessionConstants');
const Store = require('flux/utils').Store;
const SessionStore = new Store(Dispatcher);

let _currentUser = {};
let _loggedIn = false;


function login(user) {
  _currentUser = user;
  _loggedIn = true;
  SessionStore.__emitChange();
}

function logout() {
  _currentUser = {};
  _loggedIn = false;
  hashHistory.push('/login');
}

function signup(user) {
  _currentUser = user;
  _loggedIn = true;
  SessionStore.__emitChange();
}

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      logout();
      break;
    default:
      break;
  }
};

SessionStore.currentUser = function () {
  const copy = {};
  return Object.assign(copy, _currentUser);
};

SessionStore.loggedIn = function() {
  return _loggedIn;
};

module.exports = SessionStore;
