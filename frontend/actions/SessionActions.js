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
  receiveUser(user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    })
  }
}

module.exports = SessionActions;
