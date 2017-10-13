const CollectionApiUtil = require('../utils/CollectionApiUtil');
const CollectionConstants = require('../constants/CollectionConstants');
const Dispatcher = require('../dispatcher/dispatcher');
import ErrorActions from './ErrorActions';

const CollectionActions = {
  createCollection(collection) {
    CollectionApiUtil.createCollection(collection, this.receiveCollection);
  },
  createModalCollection(collection) {
    CollectionApiUtil.createModalCollection(collection, this.receiveModalCollection);
  },
  getCollection(id) {
    CollectionApiUtil.getCollection(id, this.receiveCollection);
  },
  fetchCollections() {
    CollectionApiUtil.fetchCollections(this.receiveCollections);
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
  },
  receiveModalCollection(collection) {
    Dispatcher.dispatch({
      actionType: CollectionConstants.RECEIVE_MODAL_COLLECTION,
      collection: collection
    })
  }
}

module.exports = CollectionActions;
