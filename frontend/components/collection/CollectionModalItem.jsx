import React from 'react';
const CollectionActions = require('../../actions/CollectionActions');

const CollectionModalItem = React.createClass ({
  getInitialState: function() {
    return {
      added: this.photoAdded(this.props.collectionData)
    };
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      added: this.photoAdded(nextProps.collectionData)
    })
  },
  photoAdded(collection) {
    return collection.photos.some((photo) => {
      return photo.id === this.props.photoData.id
    });
  },
  addPhoto(photoObj, collectionObj) {
    CollectionActions.addPhotoToCollection(photoObj, collectionObj);
  },
  removePhoto(photoObj, collectionObj) {
    CollectionActions.removePhotoFromCollection(photoObj, collectionObj);
  },
  handleAddPhoto() {
    if (this.state.added) {
      return (
        this.removePhoto(this.props.photoData, this.props.collectionData)
      )
    } else {
      return (
        this.addPhoto(this.props.photoData, this.props.collectionData)
      )
    }
  },
  handleAddPhotoClassName() {
    if (this.state.added) {
      return (
        "collection-container photo-added"
      )
    } else {
      return (
        "collection-container"
      )
    }
  },
  render () {
    let bckImage;
    if (this.state.added) {
      bckImage = 'url(' + this.props.photoData.url + ')';
    } else {
      bckImage = "none"
    }
    return (
      <div className={this.handleAddPhotoClassName()} onClick={this.handleAddPhoto} id="collection-item" style={{backgroundImage: bckImage, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
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

module.exports = CollectionModalItem;
