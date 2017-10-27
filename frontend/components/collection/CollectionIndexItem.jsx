const React = require('react');
const GridPhotoIndexItem = require('../photo/GridPhotoIndexItem');

const CollectionIndexItem = React.createClass({
  handleBackgroundImage() {
    if (this.props.collectionData.photos.length > 0) {
      return {
        background: `url(${this.props.collectionData.photos[0].url})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  render() {
    return (
      <div className="collection-item" style={this.handleBackgroundImage()}>
        <div>
          <p>{this.props.collectionData.photos.length} Photos</p>
          <h1>{this.props.collectionData.name}</h1>
          <p> {this.props.collectionData.user.first_name + " " + this.props.collectionData.user.last_name}</p>
        </div>
      </div>
    )
  }
});

module.exports = CollectionIndexItem;
