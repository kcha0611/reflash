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
  _collections.push(collectionObj);
  return _collections;
}

CollectionStore.find = function(id) {
  return _collections[id];
};

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
  }
};


module.exports = CollectionStore;
