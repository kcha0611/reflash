const React = require('react');
const PhotoActions = require('../../actions/PhotoActions');
const PhotoStore = require('../../stores/PhotoStore');

const SearchBar = React.createClass({
  getInitialState: function() {
    return {
      searchInput: ""
    };
  },
  _onChange(e) {
    PhotoActions.fetchSearchedPhotos(e.target.value);
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
