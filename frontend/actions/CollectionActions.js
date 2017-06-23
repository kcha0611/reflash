const CollectionApiUtil = require('../utils/CollectionApiUtil');
const CollectionConstants = require('../constants/CollectionConstants');
const Dispatcher = require('../dispatcher/dispatcher');

const CollectionActions = {
  createCollection(collection) {
    CollectionApiUtil.createCollection(collection, this.receiveCollection);
  },
  getCollection(collection) {
    CollectionApiUtil.getCollection(collection, this.receiveCollection);
  },
  fetchCollections(collections) {
    CollectionApiUtil.fetchCollections(collections, this.receiveCollections);
  },
  receiveCollection(collection) {
    Dispatcher.dispatch({
      actionType: CollectionConstants.RECEIVE_COLLECTION,
      collection: collection
    })
  },
  receiveCollections(collections) {
    Dispatcher.dispatch({
      actionType: CollectionConstants.RECEIVE_COLLECTIONS,
      collections: collections
    })
  }
}

module.exports = CollectionActions;
