module.exports = {
  fetchSearchedPhotos(searchInput, successCB) {
    $.ajax({
      url: "api/photos",
      data: {search_input: searchInput},
      success: function(photos) {
        successCB(photos, searchInput)
      }
    })
  },
  fetchSearchedCollections(searchInput, successCB) {
    $.ajax({
      url: "api/collections",
      data: {search_input: searchInput},
      success: function(collections) {
        successCB(collections)
      }
    })
  },
  fetchSearchedUsers(searchInput, successCB) {
    $.ajax({
      url: "api/users",
      data: {search_input: searchInput},
      success: function(users) {
        successCB(users)
      }
    })
  }
}
