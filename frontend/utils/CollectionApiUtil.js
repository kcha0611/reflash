module.exports = {
  createCollection(collection, successCB) {
    $.ajax({
      url: "api/collections",
      method: "POST",
      data: { collection: collection },
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
  getCollection(collection, successCB) {
    $.ajax({
      url: `api/collections/${collection.id}`,
      data: {collection: collection},
      success: function(collection) {
        successCB(collection)
      }
    })
  }
}
