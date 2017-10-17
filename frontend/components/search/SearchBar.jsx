const React = require('react');
const SearchActions = require('../../actions/SearchActions');
const SearchStore = require('../../stores/PhotoStore');

const SearchBar = React.createClass({
  getInitialState: function() {
    return {
      searchInput: ""
    };
  },
  _onChange(e) {
    SearchActions.fetchSearchedPhotos(e.target.value);
    SearchActions.fetchSearchedCollections(e.target.value);
    SearchActions.fetchSearchedUsers(e.target.value);
    this.setState({searchInput: e.target.value });
  },
  render() {
    return (
      <div className="search-bar">
        <input type="text" value={this.state.searchInput} onChange={this._onChange} placeholder="Search free high-resolution photos"/>
      </div>
    )
  }
})

module.exports = SearchBar;
