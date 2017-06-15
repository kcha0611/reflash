const React = require('react');
const PhotoStore = require('../stores/PhotoStore');
const PhotoActions = require('../actions/PhotoActions');
const PhotoIndexItem = require('./PhotoIndexItem');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const PhotoIndex = React.createClass({
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
  onGridTab() {
    $(".inner-item-container").addClass('grid');
    $(".item-container").addClass('grid');
  },
  render() {
    let photos = this.state.photos.map(function (photo) {
      return (
        <PhotoIndexItem key={photo.id} photoData={photo} />
      )
    });
    return (
      <div>
        <div className="inner-index-container">
          <h1>Reflash</h1>
          <p>Free (<a>do whatever you want</a>) high resolution photos.</p>
          <p>To get the best of Reflash delivered to your inbox, <a>subscribe</a>.</p>
          <Link to="/gridphotos">Grid</Link>
        </div>
        {photos}
      </div>
    )
  }
})

module.exports = PhotoIndex;
