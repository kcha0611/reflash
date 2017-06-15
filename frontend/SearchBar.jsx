const React = require('react');

const SearchBar = React.createClass({
  getInitialState: function() {
    return {
      searchTerm: ""
    };
  }
});

module.exports = SearchBar;
