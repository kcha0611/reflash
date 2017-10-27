const React = require('react');
const GridPhotoIndexItem = require('../photo/GridPhotoIndexItem');

const CollectionIndexItem = React.createClass({
  handleRender() {
  },
  render() {
    return (
      <div className="collection-item">
        {this.props.collectionData.name}
      </div>
    )
  }
});

module.exports = CollectionIndexItem;
