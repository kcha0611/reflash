const SearchApiUtil = require('../utils/SearchApiUtil');
const SearchConstants = require('../constants/SearchConstants');
const Dispatcher = require('../dispatcher/dispatcher');

const SearchActions = {
  fetchSearchedPhotos(searchInput) {
    SearchApiUtil.fetchSearchedPhotos(searchInput, this.receivePhotos);
  },
  fetchSearchedCollections(searchInput) {
    SearchApiUtil.fetchSearchedCollections(searchInput, this.receiveCollections);
  },
  fetchSearchedUsers(searchInput) {
    SearchApiUtil.fetchSearchedUsers(searchInput, this.receiveUsers);
  },
  receivePhotos(photos) {
    Dispatcher.dispatch({
      actionType: SearchConstants.SEARCHED_PHOTOS_RECEIVED,
      photos: photos
    });
  },
  receiveCollections(collections) {
    Dispatcher.dispatch({
      actionType: SearchConstants.SEARCHED_COLLECTIONS_RECEIVED,
      collections: collections
    });
  },
  receiveUsers(users) {
    Dispatcher.dispatch({
      actionType: SearchConstants.SEARCHED_USERS_RECEIVED,
      users: users
    });
  }
}

module.exports = SearchActions;
