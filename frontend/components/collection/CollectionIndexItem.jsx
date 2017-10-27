const React = require('react');
const GridPhotoIndexItem = require('../photo/GridPhotoIndexItem');

const CollectionIndexItem = React.createClass({
  handleBackgroundImage() {
    if (this.props.collectionData.photos.length > 0) {
      return this.props.collectionData.photos[0].url;
    }
  },
  render() {
    return (
      <div className="collection-item">
          <img src={this.handleBackgroundImage()} className="collection-search-img"/>
          <div>
            <p>{this.props.collectionData.photos.length} Photos</p>
            <h1>{this.props.collectionData.name}</h1>
          </div>
      </div>
    )
  }
});

module.exports = CollectionIndexItem;
