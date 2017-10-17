const React = require('react');
const PhotoStore = require('../../stores/PhotoStore');
const PhotoActions = require('../../actions/PhotoActions');
const PhotoIndexItem = require('./PhotoIndexItem');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
import SessionStore from '../../stores/SessionStore';

const PhotoIndex = React.createClass({
  getInitialState: function() {
    return {
      photos: [],
      searchInput: ""
    };
  },
  componentDidMount: function() {
    this.photoListener = PhotoStore.addListener(this.onChange);
    PhotoActions.fetchPhotos();
  },
  componentWillUnmount: function() {
    this.photoListener.remove();
  },
  onChange() {
    this.setState({photos: PhotoStore.all()})
  },
  onGridTab() {
    $(".inner-item-container").addClass('grid');
    $(".item-container").addClass('grid');
  },
  render() {
    let photos = this.state.photos.map(function (photo) {
      return (
        <PhotoIndexItem key={photo.id} photoData={photo} currentUser={SessionStore.currentUser()} />
      )
    });
    let navTab;
    if (this.state.searchInput !== "") {
      navTab = (
        <div className="navtab-wrap">
          <div className="inner-navtab-wrap">
            <a>All</a>
            <a>{this.state.photos.length} Photos</a>
            <a>Collections</a>
            <a>Users</a>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="inner-index-container">
          <h1>Reflash</h1>
          <p>Free (<a>do whatever you want</a>) high resolution photos.</p>
          <p>To get the best of Reflash delivered to your inbox, <a>subscribe</a>.</p>
          <Link to="/gridphotos">Grid</Link>
        </div>
        <h1 className="search-input">{this.state.searchInput}</h1>
          {navTab}
          {photos}
      </div>
    )
  }
})

module.exports = PhotoIndex;
