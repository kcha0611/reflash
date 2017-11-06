const SessionApiUtil = require('../utils/SessionApiUtil');
const SessionConstants = require('../constants/SessionConstants');
const Dispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('./ErrorActions');

const SessionActions = {
  login(user) {
    SessionApiUtil.login(user, this.receiveUser, ErrorActions.setErrors);
  },
  signup(user) {
    SessionApiUtil.signup(user, this.receiveUser, ErrorActions.setErrors);
  },
  logout() {
    SessionApiUtil.logout(this.removeUser);
  },
  receiveUser(user) {
    debugger
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    })
  },
  removeUser() {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    })
  }
}

module.exports = SessionActions;
