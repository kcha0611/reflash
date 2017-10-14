import React from 'react';

class CollectionIndexItem extends React.Component {
  render () {
    return (
      <div className="collection-container">
        <h6>
          {this.props.collectionData.photos.length} photos
        </h6>
        <h3>
          {this.props.collectionData.name}
        </h3>
      </div>
    )
  }
}

export default CollectionIndexItem
