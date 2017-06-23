const PhotoApiUtil = require('../utils/PhotoApiUtil');
const PhotoConstants = require('../constants/PhotoConstants');
const Dispatcher = require('../dispatcher/dispatcher');

const PhotoActions = {
  createPhoto(photo) {
    PhotoApiUtil.createPhoto(photo, this.receivePhoto);
  },
  fetchPhotos() {
    PhotoApiUtil.fetchPhotos(this.receivePhotos);
  },
  fetchSearchedPhotos(searchInput) {
    PhotoApiUtil.fetchSearchedPhotos(searchInput, this.receiveSearchedPhotos);
  },
  fetchRandomPhoto() {
    PhotoApiUtil.fetchRandomPhotos(this.receivePhoto);
  },
  getPhoto(id) {
    PhotoApiUtil.getPhoto(id, this.receivePhoto);
  },
  likePhoto(photo) {
    PhotoApiUtil.likePhoto(photo, this.receivePhoto);
  },
  receivePhoto(photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_PHOTO,
      photo: photo
    })
  },
  receivePhotos(photos) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_PHOTOS,
      photos: photos
    })
  },
  receiveSearchedPhotos(photos, searchInput) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_SEARCHED_PHOTOS,
      photos: photos,
      searchInput: searchInput
    })
  }
}

module.exports = PhotoActions;
