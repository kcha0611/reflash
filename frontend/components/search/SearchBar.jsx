const React = require('react');
const SearchActions = require('../../actions/SearchActions');
const SearchStore = require('../../stores/PhotoStore');

const SearchBar = React.createClass({
  getInitialState: function() {
    return {
      searchInput: ""
    };
  },
  onChange(e) {
    if (e.target.value !== "") {
      $(".inner-index-container").hide();
    } else {
      $(".inner-index-container").show();
    }
    SearchActions.fetchSearchedUsers(e.target.value);
    SearchActions.fetchSearchedPhotos(e.target.value);
    SearchActions.fetchSearchedCollections(e.target.value);
    this.props.receiveSearchInput(e.target.value);
    this.setState({searchInput: e.target.value });
  },
  render() {
    return (
      <div className="search-bar">
        <input type="text" value={this.state.searchInput} onChange={this.onChange} placeholder="Search free high-resolution photos"/>
      </div>
    )
  }
})

module.exports = SearchBar;
