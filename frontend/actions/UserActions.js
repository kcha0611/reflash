const UserActions = {
  fetchUsers() {
    UserApiUtil.fetchUsers(this.receiveUsers);
  },
  receiveUsers(users) {
    Dispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    })
  },
}
