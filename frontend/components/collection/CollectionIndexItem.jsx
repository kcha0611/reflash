const React = require('react');

const CollectionIndexItem = React.createClass({
  render() {
    <div>
      <div>
        {collection.created_at}
        {collection.name}
      </div>
      <div>
        {collection.user.first_name}
        {collection.user.last_name}
      </div>
    </div>
  }
});

module.exports = CollectionIndexItem;
