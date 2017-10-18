const React = require('react');
const PhotoStore = require('../../stores/PhotoStore');
const PhotoActions = require('../../actions/PhotoActions');
const PhotoIndexItem = require('./PhotoIndexItem');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
import SessionStore from '../../stores/SessionStore';
const SearchResult = require('../search/SearchResult');
const SearchStore = require('../../stores/SearchStore');

const PhotoIndex = React.createClass({
  getInitialState: function() {
    return {
      photos: [],
      searchInput: SearchStore.searchInput()
    };
  },
  componentDidMount: function() {
    this.photoListener = PhotoStore.addListener(this.onChange);
    this.searchListener = SearchStore.addListener(this.onSearchChange);
    PhotoActions.fetchPhotos();
  },
  componentWillUnmount: function() {
    this.searchListener.remove();
    this.photoListener.remove();
  },
  onSearchChange() {
    this.setState({searchInput: SearchStore.searchInput()});
  },
  onChange() {
    this.setState({photos: PhotoStore.all()});
  },
  onGridTab() {
    $(".inner-item-container").addClass('grid');
    $(".item-container").addClass('grid');
  },
  handleSearch() {
    if (this.state.searchInput !== "") {
      return (
        <SearchResult />
      )
    } else {
      return this.state.photos.map(function (photo) {
        return (
          <PhotoIndexItem key={photo.id} photoData={photo} currentUser={SessionStore.currentUser()} />
        )
      });
    }
  },
  render() {
    return (
      <div>
        <div className="inner-index-container">
          <h1>Reflash</h1>
          <p>Free (<a>do whatever you want</a>) high resolution photos.</p>
          <p>To get the best of Reflash delivered to your inbox, <a>subscribe</a>.</p>
          <Link to="/gridphotos">Grid</Link>
        </div>
          {this.handleSearch()}
      </div>
    )
  }
})

module.exports = PhotoIndex;
