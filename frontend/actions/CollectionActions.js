const CollectionApiUtil = require('../utils/CollectionApiUtil');
const CollectionConstants = require('../constants/CollectionConstants');
const Dispatcher = require('../dispatcher/dispatcher');
import ErrorActions from './ErrorActions';

const CollectionActions = {
  createCollection(collection) {
    CollectionApiUtil.createCollection(collection, this.receiveCollection);
  },
  getCollection(id) {
    debugger
    CollectionApiUtil.getCollection(id, this.receiveCollection);
  },
  fetchCollections() {
    CollectionApiUtil.fetchCollections(this.receiveCollections);
  },
  receiveCollection(collection) {
    debugger
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
