// import React from 'react';
// import CollectionActions from '../../actions/CollectionActions';
// import CollectionStore from '../../stores/CollectionStore';
//
// class CollectionDetail extends React.Component {
//   constructor(props) {
//     super(props)
//     const potentialCollection = CollectionStore.find(props.params.collectionID);
//     this.state = {
//       collection: potentialCollection ? potentialCollection : {}
//     }
//   }
//   componentDidMount() {
//     debugger
//     this.collectionListener = CollectionStore.addListener(this.onCollectionChange);
//   }
//   onCollectionChange() {
//     debugger
//     const potentialCollection = CollectionStore.find(props.params.collectionID);
//     this.setState({
//       collection: potentialCollection ? potentialCollection : {}
//     });
//   }
//   render () {
//     return (
//       <div>
//         {this.state.collection.name}
//       </div>
//     )
//   }
// }

// export default CollectionDetail;

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
