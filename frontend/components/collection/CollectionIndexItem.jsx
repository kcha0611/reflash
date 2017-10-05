import React from 'react';

class CollectionIndexItem extends React.Component {
  render () {
    return (
      <div>
        {this.props.collectionData.name}
      </div>
    )
  }
}

export default CollectionIndexItem
