const React = require('react');
const PhotoStore = require('../stores/PhotoStore');
const PhotoActions = require('../actions/PhotoActions');
const GridPhotoIndexItem = require('./GridPhotoIndexItem');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const GridPhotoIndex = React.createClass({
  getInitialState: function() {
    return {
      photos: []
    };
  },
  componentDidMount: function() {
    this.photoListener = PhotoStore.addListener(this.onChange);
    PhotoActions.fetchPhotos();
  },
  onChange() {
    this.setState({photos: PhotoStore.all()})
  },
  render() {
    let photos = this.state.photos.map(function (photo) {
      return (
        <GridPhotoIndexItem key={photo.id} gridPhotoData={photo} />
      )
    });
    return (
      <div className="grid-container">
        <div className="grid-index-container">
          <h1>Reflash</h1>
          <p>Free (<a>do whatever you want</a>) high resolution photos.</p>
          <p>To get the best of Reflash delivered to your inbox, <a>subscribe</a>.</p>
          <Link to="/">Normal</Link>
        </div>
        <div className="inner-photo-container">
          {photos}
        </div>
      </div>
    )
  }
})

module.exports = GridPhotoIndex;
