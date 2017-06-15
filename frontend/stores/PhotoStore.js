const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/PhotoConstants');
const PhotoStore = new Store(AppDispatcher);


let _photos = {};


PhotoStore.all = function() {
  return Object.keys(_photos).sort(function(first, second) {
    return new Date(_photos[second].updated_at) - new Date(_photos[first].updated_at)
  }).map(function(id){
    return _photos[id];
  });
};

PhotoStore.find = function(id){
  return _photos[id];
}

PhotoStore.reset = function(photoObj){
  _photos = {};
  photoObj.photos.forEach(function(photo){
    _photos[photo.id] = photo;
  });
};

PhotoStore.resetOne = function(photoObj){
  _photos = {};
  _photos[photoObj.id] = photoObj;

  return _photos;
}

PhotoStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PhotoConstants.RECEIVE_PHOTOS:
      PhotoStore.reset(payload.photos)
      PhotoStore.__emitChange();
      break;
    case PhotoConstants.RECEIVE_PHOTO:
      PhotoStore.resetOne(payload.photo)
      PhotoStore.__emitChange();
      break;
  }
};

module.exports = PhotoStore;
