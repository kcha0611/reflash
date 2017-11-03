const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Modal = require('react-bootstrap').Modal;
const CollectionModalItem = require('./CollectionModalItem');
const CollectionModalForm = require('../forms/CollectionModalForm');
const CollectionStore = require('../../stores/CollectionStore');
const CollectionActions = require('../../actions/CollectionActions');
const SessionStore = require('../../stores/SessionStore');

const CollectionModal = React.createClass({
  getInitialState: function() {
    return {
      show: this.props.show,
      userCollections: []
    };
  },
  redirectIfLoggedIn() {
    if (!SessionStore.loggedIn()) {
      hashHistory.push('/login')
    }
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
      userCollections: CollectionStore.all()
    });
  },
  openCollectionForm() {
    $(".collection-modal-right").addClass("hide");
    $("#collection-form").animate({right: "+=600"});
  },
  addPhoto(photoObj, collectionObj) {
    CollectionActions.addPhotoToCollection(photoObj, collectionObj)
  },
  render() {
    let userCollections = this.state.userCollections.map((collection) => {
      return (
        <CollectionModalItem key={"id" + collection.id} collectionData={collection} photoData={this.props.photoData}/>
      )
    });
    let modalLeftStyles = {
      backgroundImage: `url(${this.props.photoData.url})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <div className="collection-modal-container">
        <Modal show={this.props.show} onHide={this.props.onHide} className="collection-modal">
          <div className="collection-modal-wrap">
            <div className="collection-modal-left" style={modalLeftStyles}>
            </div>
            <div className="collection-modal-right">
              <div id="inner-collections-wrap">
                <h1>Add to Collection</h1>
                <a onClick={this.openCollectionForm}>Create a new collection</a>
              </div>
              {userCollections}
            </div>
            <CollectionModalForm />
          </div>
        </Modal>
      </div>
    )
  }
});

module.exports = CollectionModal;
