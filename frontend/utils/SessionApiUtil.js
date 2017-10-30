const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
module.exports = {
  login(user, successCB, errorCB) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: {user: user},
      success: function(user) {
        hashHistory.push("/");
        successCB(user);
      },
      error: function(xhr) {
        errorCB('login', xhr.responseJSON);
      }
    })
  },
  signup(user, successCB, errorCB) {
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: {user: user},
      success: function(user) {
        hashHistory.push("/");
        successCB(user);
      },
      error: function(xhr) {
        errorCB('signup', xhr.responseJSON);
      }
    })
  },
  logout(successCB) {
    $.ajax({
      method: 'DELETE',
      url: 'api/session',
      success: function() {
        successCB();
      }
    })
  }
}
