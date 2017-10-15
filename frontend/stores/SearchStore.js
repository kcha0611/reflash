// const Store = require('flux/utils').Store;
// const SearchConstants = require('../constants/SearchConstants');
// const Dispatcher = require('../dispatcher/dispatcher');
// const SearchStore = new Store(Dispatcher);
//
// _searchResults = [];
//
// SearchStore.all = function() {
//   return _searchResults;
// }
//
// SearchStore.reset = function(searchResultsObj) {
//   _searchResults = [];
//   searchResultsObj.forEach(function(searchResultObj) {
//     _searchResults[searchResultObj.id] = searchResultObj;
//   });
// }
//
// SearchStore.__onDispatch = function(payload) {
//   switch (payload.actionType) {
//     case SearchConstants.SEARCHED:
//       SearchStore.reset(payload)
//   }
// }
