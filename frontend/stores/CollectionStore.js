const Store = require('flux/utils').Store;
const CollectionConstants = require('../constants/CollectionConstants');
const Dispatcher = require('../dispatcher/dispatcher');
const CollectionStore = new Store(Dispatcher);

_collections = {};

CollectionStore.all = function() {
  return _collections;
}

CollectionStore.reset = function(collectionObj) {
  _collections = {};
  Object.keys(collectionObj.collections).forEach(function(collection) {
    _collections[collection.id] = collection;
  });
};

CollectionStore.resetOne = function(collectionObj) {
  _collections = {};
  _collections[collectionObj.id] = collectionObj;
  return _collections
};

CollectionStore.find(id) {
  return _collections[id];
};

CollectionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case CollectionConstants.RECEIVE_COLLECTIONS:
      CollectionStore.reset(payload.collections);
      this.__emitChange();
    case CollectionConstants.RECEIVE_COLLECTION:
      CollectionStore.resetOne(payload.collection);
      this.__emitChange();
  }
};


module.exports = CollectionStore;
