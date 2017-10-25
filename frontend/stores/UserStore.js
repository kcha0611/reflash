const Dispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/SessionConstants');
const Store = require('flux/utils').Store;
const UserStore = new Store(Dispatcher);

_users = [];

UserStore.resetUsers = function(userObj) {
  userObj.users.map(function (user) {
    _users[user] = user
  });
}

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      UserStore.resetUsers(payload.users);
      UserStore.__emitChange();
      break;
  }
}

module.exports = UserStore;
