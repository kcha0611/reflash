module.exports = {
  createPhoto(photo, successCB) {
    $.ajax({
      method: "POST",
      url: "api/photos",
      data: {photo: photo},
      success: function(photo) {
        successCB(photo)
      }
    })
  },
  fetchPhotos(successCB) {
    $.ajax({
      url: "api/photos",
      success: function(photos) {
        successCB(photos)
      }
    })
  },
  fetchSearchedPhotos(searchInput, successCB) {
    $.ajax({
      url: "api/photos",
      data: {searchInput: searchInput},
      success: function(photos) {
        successCB(photos, searchInput)
      }
    })
  },
  fetchRandomPhoto(successCB) {
    $.ajax({
      url: "https://source.unsplash.com/random",
      success: function(photo) {
        successCB(photo)
      }
    })
  },
  getPhoto(id, successCB) {
    $.ajax({
      url: `api/photos/${id}`,
      success: function(photo) {
        successCB(photo);
      }
    })
  },
  likePhoto(photo, successCB) {
    $.ajax({
      method: "PATCH",
      url: `api/like/photos`,
      data: {likes: photo.likes + 1, id: photo.id, user_id: photo.user.id},
      success: function(photo) {
        successCB(photo);
      }
    })
  }
}
