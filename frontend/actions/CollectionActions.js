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
  addPhotoToCollection(photo, collection) {
    CollectionApiUtil.addPhotoToCollection(photo, collection, this.receiveAddedPhoto)
  },
  removePhotoFromCollection(photo, collection) {
    CollectionApiUtil.removePhotoFromCollection(photo, collection, this.removeAddedPhoto)
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
  },
  receiveAddedPhoto(data) {
    Dispatcher.dispatch({
      actionType: CollectionConstants.RECEIVE_ADDED_PHOTO,
      collection: data.collection,
      photo: data.photo
    })
  },
  removeAddedPhoto(data) {
    Dispatcher.dispatch({
      actionType: CollectionConstants.REMOVE_ADDED_PHOTO,
      collection: data.collection,
      photo: data.photo
    })
  }
}

module.exports = CollectionActions;
