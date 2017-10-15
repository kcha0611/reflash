const Store = require('flux/utils').Store;
const CollectionConstants = require('../constants/CollectionConstants');
const Dispatcher = require('../dispatcher/dispatcher');
const CollectionStore = new Store(Dispatcher);


let _collections = [];

CollectionStore.all = function() {
  // return Object.keys(_collections).sort(function(first, second) {
  //   return new Date(_collections[second].updated_at) - new Date(_collections[first].updated_at)
  // }).map(function(id){
  //   return _collections[id];
  // });
  return _collections;
}

CollectionStore.reset = function(collectionObj) {
  _collections = [];
  collectionObj.collections.forEach(function(collection) {
    _collections[collection.id] = collection;
  });
};

CollectionStore.resetOne = function(collectionObj) {
  _collections = [];
  _collections[collectionObj.id] = collectionObj;
  return _collections;
};

CollectionStore.addModalCollection = function(collectionObj) {
  _collections[collectionObj.collection.id] = collectionObj.collection;
  return _collections;
}

CollectionStore.addPhotoToCollection = function(collectionObj, photoObj) {
  let collectionIdx = findCollectionIdx(collectionObj);
  let photoIdx = checkIfPhotoAdded(_collections[collectionIdx].photos, photoObj);
  if (collectionIdx >= 0 && photoIdx === -1) {
    _collections[collectionIdx].photos.push(photoObj);
  }
}

CollectionStore.removePhotoFromCollection = function(collectionObj, photoObj) {
  let collectionIdx = findCollectionIdx(collectionObj);
  let photoIdx = checkIfPhotoAdded(_collections[collectionIdx].photos, photoObj);
  if (collectionIdx >= 0 && photoIdx < 0) {
    _collections[collectionIdx].photos.splice(photoIdx, 1);
  }
}

CollectionStore.find = function(id) {
  return _collections[id];
};

function checkIfPhotoAdded(photos, photoObj) {
  let idx = -1;
  photos.forEach(function(photo, i) {
    if (photo.id === photoObj.id) {
      idx = i;
    }
  });
  return idx;
}

function findCollectionIdx(collectionObj) {
  let idx = -1;
  _collections.forEach(function(collection, i) {
    if (collection.id === collectionObj.id) {
      idx = i;
    }
  });
  return idx;
}

CollectionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case CollectionConstants.RECEIVE_COLLECTIONS:
      CollectionStore.reset(payload.collections);
      CollectionStore.__emitChange();
      break;
    case CollectionConstants.RECEIVE_COLLECTION:
      CollectionStore.resetOne(payload.collection);
      CollectionStore.__emitChange();
      break;
    case CollectionConstants.RECEIVE_MODAL_COLLECTION:
      CollectionStore.addModalCollection(payload.collection);
      CollectionStore.__emitChange();
      break;
    case CollectionConstants.RECEIVE_ADDED_PHOTO:
      CollectionStore.addPhotoToCollection(payload.collection, payload.photo);
      CollectionStore.__emitChange();
      break;
    case CollectionConstants.REMOVE_ADDED_PHOTO:
      CollectionStore.removePhotoFromCollection(payload.collection, payload.photo);
      CollectionStore.__emitChange();
      break;
  }
};


module.exports = CollectionStore;
