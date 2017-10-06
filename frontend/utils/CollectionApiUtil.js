module.exports = {
  createCollection(collection, successCB) {
    $.ajax({
      method: "POST",
      url: "api/collections",
      data: {collection: collection},
      success: function(collection) {
        successCB(collection)
      }
    })
  },
  fetchCollections(successCB) {
    $.ajax({
      url: "api/collections",
      success: function(collections) {
        successCB(collections)
      }
    })
  },
  getCollection(id, successCB) {
    $.ajax({
      url: `api/collections/${id}`,
      success: function(collection) {
        successCB(collection)
      }
    })
  }
}
