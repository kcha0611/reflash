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
  }
}

module.exports = PhotoActions;
