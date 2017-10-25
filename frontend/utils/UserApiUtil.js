module.exports = {
  fetchUsers(users, successCB) {
    $.ajax({
      url: `api/users`,
      success: function(users) {
        successCB(users);
      }
    })
  }
}
