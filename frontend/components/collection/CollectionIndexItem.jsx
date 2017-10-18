const React = require('react');

const CollectionIndexItem = React.createClass({
  render() {
    return (
      <div>
        <div>
          {this.props.collectionData.created_at}
          {this.props.collectionData.name}
        </div>
        <div>
          {this.props.collectionData.user.first_name}
          {this.props.collectionData.user.last_name}
        </div>
      </div>
    )
  }
});

module.exports = CollectionIndexItem;
