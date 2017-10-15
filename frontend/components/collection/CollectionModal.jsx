const React = require('react');
const Modal = require('react-bootstrap').Modal;
import CollectionIndexItem from './CollectionIndexItem';
import CollectionModalForm from '../forms/CollectionModalForm';
import CollectionStore from '../../stores/CollectionStore';
import CollectionActions from '../../actions/CollectionActions';

const CollectionModal = React.createClass({
  getInitialState: function() {
    return {
      show: this.props.show,
      userCollections: []
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
        <CollectionIndexItem key={"id" + collection.id} collectionData={collection} photoData={this.props.photoData}/>
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
