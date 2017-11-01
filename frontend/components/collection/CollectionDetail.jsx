const React = require('react');
const CollectionStore = require('../../stores/CollectionStore');
const CollectionActions = require('../../actions/CollectionActions');

const CollectionDetail = React.createClass({
  getInitialState: function() {
    const potentialCollection = CollectionStore.find(this.props.params.collectionID)
    return {
      collection: potentialCollection ? potentialCollection : {}
    };
  },
  componentDidMount: function() {
    this.collectionListener = CollectionStore.addListener(this.onCollectionChange);
    CollectionActions.getCollection(parseInt(this.props.params.collectionID));
  },
  onCollectionChange() {
    let potentialCollection = CollectionStore.find(this.props.params.collectionID)
    this.setState({
      collection: potentialCollection ? potentialCollection : {}
    })
  },
  render() {
    return (
      <div>
        {this.state.collection.name}
      </div>
    )
  }
})

module.exports = CollectionDetail;
