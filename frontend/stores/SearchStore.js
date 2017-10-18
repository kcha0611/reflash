const Store = require('flux/utils').Store;
const SearchConstants = require('../constants/SearchConstants');
const Dispatcher = require('../dispatcher/dispatcher');
const SearchStore = new Store(Dispatcher);

let _photoResults = [];
let _collectionResults = [];
let _userResults = [];
let _searchInput = "";

SearchStore.allPhotos = function() {
  return _photoResults;
}

SearchStore.allCollections = function() {
  return _collectionResults;
}

SearchStore.allUsers = function() {
  return _userResults;
}

SearchStore.resetPhotos = function(searchResultsObj) {
  _photoResults = [];
  searchResultsObj.photos.photos.forEach(function(photo) {
    _photoResults[photo.id] = photo;
  });
  _searchInput = searchResultsObj.searchInput;
}

SearchStore.resetCollections = function(searchResultsObj) {
  _collectionResults = [];
  searchResultsObj.collections.forEach(function(collection) {
    _collectionResults[collection.id] = collection;
  });
}

SearchStore.resetUsers = function(searchResultsObj) {
  _userResults = [];
  searchResultsObj.users.forEach(function(user) {
    _userResults[user.id] = user;
  });
}

SearchStore.searchInput = function() {
  return _searchInput;
}

SearchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SearchConstants.SEARCHED_PHOTOS_RECEIVED:
      SearchStore.resetPhotos(payload);
      SearchStore.__emitChange();
      break;
    case SearchConstants.SEARCHED_COLLECTIONS_RECEIVED:
      SearchStore.resetCollections(payload.collections);
      SearchStore.__emitChange();
      break;
    case SearchConstants.SEARCHED_USERS_RECEIVED:
      SearchStore.resetUsers(payload.users);
      SearchStore.__emitChange();
      break;
  }
}

module.exports = SearchStore;
