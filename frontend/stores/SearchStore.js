const Store = require('flux/utils').Store;
const SearchConstants = require('../constants/SearchConstants');
const Dispatcher = require('../dispatcher/dispatcher');
const SearchStore = new Store(Dispatcher);

let _photoResults = [];
let _collectionResults = [];
let _userResults = [];

SearchStore.allPhotos = function() {
  return _photoResults;
}

SearchStore.reset = function(searchResultsObj) {
  _photoResults = [];
  _collectionResults = [];
  _userResults = [];
  debugger
  searchResultsObj.photos.forEach(function(photo) {
    _searchResults[photo.id] = photo;
  });
}

SearchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SearchConstants.SEARCHED_PHOTOS_RECEIVED:
      debugger
      SearchStore.reset(payload);
      SearchStore.__emitChange();
      break;
  }
}

module.exports = SearchStore;
