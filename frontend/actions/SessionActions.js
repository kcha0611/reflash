const SessionApiUtil = require('../utils/SessionApiUtil');
const SessionConstants = require('../constants/SessionConstants');
const Dispatcher = require('../dispatcher/dispatcher');

const SessionActions = {
  login(user) {
    SessionApiUtil.login(user, this.receiveUser);
  },
  signup(user) {
    SessionApiUtil.signup(user, this.receiveUser);
  },
  logout() {
    SessionApiUtil.logout(this.removeUser);
  },
  receiveUser(user) {
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
