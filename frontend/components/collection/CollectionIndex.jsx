const React = require('react');
const CollectionStore = require('../../stores/CollectionStore');
const CollectionActions = require('../../actions/CollectionActions');
const CollectionIndexItem = require('./CollectionIndexItem');

const CollectionIndex = React.createClass({
  getInitialState: function() {
    return {
      collections: []
    };
  },
  componentDidMount: function() {
    this.collectionListener = CollectionStore.addListener(this.onCollectionChange);
    CollectionActions.fetchCollections();
  },
  componentWillUnmount() {
    this.collectionListener.remove();
  },
  onCollectionChange() {
    this.setState({
      collections: CollectionStore.all()
    })
  },
  render() {
    let collections = this.state.collections.map(function(collection) {
      return (
        <CollectionIndexItem collectionData={collection} />
      )
    });
    return (
      <div>
        {collections}
      </div>
    )
  }
});

module.exports = CollectionIndex;
