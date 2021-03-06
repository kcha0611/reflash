const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
import SessionStore from './SessionStore';
import LikeConstants from '../constants/LikeConstants';
const PhotoConstants = require('../constants/PhotoConstants');
const PhotoStore = new Store(Dispatcher);

let _photos = [];
let _searchInput = "";

PhotoStore.all = function() {
  // return Object.keys(_photos).sort(function(first, second) {
  //   return new Date(_photos[second].updated_at) - new Date(_photos[first].updated_at)
  // }).map(function(id){
  //   return _photos[id];
  // });
  return _photos;
};

PhotoStore.find = function(id){
  return _photos[id];
}

PhotoStore.reset = function(photoObj){
  _photos = [];
  photoObj.photos.forEach(function(photo){
    _photos[photo.id] = photo;
  });
};

PhotoStore.resetOne = function(photoObj){
  _photos = [];
  _photos[photoObj.id] = photoObj;
  return _photos;
}

PhotoStore.sendSearchInput = function(searchInput) {
  _searchInput = searchInput;
}

PhotoStore.searchInput = function() {
  if (_searchInput !== "") {
    $(".inner-index-container").hide();
    $(".grid-index-container").hide();
  } else {
    $(".inner-index-container").show();
    $(".grid-index-container").show();
  }
  return _searchInput;
}

PhotoStore.likePhoto = function(likeObj) {
  let likedPhoto = PhotoStore.find(likeObj.photo_id);
  let photoIdx = findPhotoIdx(likedPhoto);
  if (photoIdx >= 0 && checkIfLiked(_photos[photoIdx].likes, likeObj) < 0) {
    _photos[photoIdx].likes.push(likeObj);
  }
}

PhotoStore.unlikePhoto = function(likeObj) {
  let likedPhoto = PhotoStore.find(likeObj.photo_id);
  let photoIdx = findPhotoIdx(likedPhoto);
  if (photoIdx >= 0) {
    let likeIdx = findLike(photoIdx, likeObj);
    if (likeIdx >= 0) {
      _photos[photoIdx].likes.splice(likeIdx, 1);
    }
  }
}

function findLike(photoIdx, likeObj) {
  let idx = -1;
  _photos[photoIdx].likes.forEach(function(like, i) {
    if (like.id === likeObj.id) {
      idx = i;
    }
  });
  return idx;
}

function findPhotoIdx(photoObj) {
  let idx = -1;
  _photos.forEach(function(photo, i) {
    if (photo.id === photoObj.id) {
      idx = i;
    }
  });
  return idx;
}

function checkIfLiked(likes, likeObj) {
  let idx = -1;
  likes.forEach(function(like, i) {
    if (like.id === likeObj.id) {
      idx = i;
    }
  });
  return idx;
}

PhotoStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PhotoConstants.RECEIVE_PHOTOS:
      PhotoStore.reset(payload.photos)
      PhotoStore.__emitChange();
      break;
    case PhotoConstants.RECEIVE_SEARCHED_PHOTOS:
      PhotoStore.reset(payload.photos)
      PhotoStore.sendSearchInput(payload.searchInput)
      PhotoStore.__emitChange();
      break;
    case PhotoConstants.RECEIVE_PHOTO:
      PhotoStore.resetOne(payload.photo)
      PhotoStore.__emitChange();
      break;
    case LikeConstants.RECEIVE_LIKE:
    // console.log("PhotoStore Photo liked");
      PhotoStore.likePhoto(payload.like);
      PhotoStore.__emitChange();
      break;
    case LikeConstants.REMOVE_LIKE:
      // console.log("PhotoStore Photo unliked");
      PhotoStore.unlikePhoto(payload.like);
      PhotoStore.__emitChange();
      break;
  }
};

module.exports = PhotoStore;
