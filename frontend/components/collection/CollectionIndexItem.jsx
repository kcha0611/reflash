const React = require('react');

const CollectionIndexItem = React.createClass({
  render() {
    return (
      <div>
        <div>
          {this.props.collectionData.created_at}
          {this.props.collectionData.name}
        </div>
      </div>
    )
  }
});

module.exports = CollectionIndexItem;
