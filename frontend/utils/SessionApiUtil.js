const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

module.exports = {
  login(user, successCB) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: {user: user},
      success: function(user) {
        hashHistory.push("/");
        successCB(user);
      }
    })
  },
  signup(user, successCB) {
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: {user: user},
      success: function(user) {
        hashHistory.push("/");
        successCB(user);
      }
    })
  },
  logout(successCB) {
    $.ajax({
      method: 'DELETE',
      url: 'api/session',
      success: function() {
        successCB()
      }
    })
  }
}
