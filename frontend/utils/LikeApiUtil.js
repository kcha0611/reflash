module.exports = {
  likePhoto(photoID, successCB) {
    $.ajax({
      method: "POST",
      url: "api/likes",
      data: {like: {photo_id: photoID}},
      success: function(like) {
        successCB(like)
      }
    })
  },
  unlikePhoto(photoID, successCB) {
    $.ajax({
      method: "DELETE",
      url: `api/likes/${photoID}`,
      data: {photo_id: photoID},
      success: function(like) {
        successCB(like);
      }
    })
  }
}
