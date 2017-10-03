const React = require('react');
const PhotoStore = require('../../stores/PhotoStore');
const PhotoActions = require('../../actions/PhotoActions');
const GridPhotoIndexItem = require('./GridPhotoIndexItem');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const GridPhotoIndex = React.createClass({
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
    this.setState({photos: PhotoStore.all(), searchInput: PhotoStore.searchInput()})
  },
  render() {
    let photos = this.state.photos.map(function (photo) {
      return (
        <GridPhotoIndexItem key={photo.id} gridPhotoData={photo} />
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
      <div className="grid-container">
        <div className="grid-index-container">
          <h1>Reflash</h1>
          <p>Free (<a>do whatever you want</a>) high resolution photos.</p>
          <p>To get the best of Reflash delivered to your inbox, <a>subscribe</a>.</p>
          <Link to="/">Normal</Link>
        </div>
        <h1 className="search-input">{this.state.searchInput}</h1>
        {navTab}
        <div className="inner-photo-container">
          {photos}
        </div>
      </div>
    )
  }
})

module.exports = GridPhotoIndex;
