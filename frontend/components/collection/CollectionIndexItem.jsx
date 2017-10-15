import React from 'react';
const CollectionActions = require('../../actions/CollectionActions');

const CollectionIndexItem = React.createClass ({
  addPhoto(photoObj, collectionObj) {
    CollectionActions.addPhotoToCollection(photoObj, collectionObj)
  },
  render () {
    return (
      <div className="collection-container" onClick={ () => this.addPhoto(this.props.photoData, this.props.collectionData)}>
        <h6>
          {this.props.collectionData.photos.length} photos
        </h6>
        <h3>
          {this.props.collectionData.name}
        </h3>
      </div>
    )
  }
})

module.exports = CollectionIndexItem;
