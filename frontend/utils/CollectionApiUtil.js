module.exports = {
  createCollection(collection, successCB) {
    $.ajax({
      method: "POST",
      url: "api/collections",
      data: {collection: collection},
      success: function(collection) {
        successCB(collection);
      }
    })
  },
  createModalCollection(collection, successCB) {
    $.ajax({
      method: "POST",
      url: "api/collections",
      data: {collection: collection},
      success: function(collection) {
        successCB(collection);
        $("#collection-form").animate({right: "-=600"}, function() {
          $(".collection-modal-right").removeClass("hide");
        });
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
