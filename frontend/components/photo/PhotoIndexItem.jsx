const React = require('react');
const PhotoActions = require('../../actions/PhotoActions');
//Bootstrap
const Modal = require('react-bootstrap').Modal;
//Collections
import CollectionForm from '../forms/CollectionForm';
import CollectionStore from '../../stores/CollectionStore';
import CollectionIndexItem from '../collection/CollectionIndexItem';
import CollectionActions from '../../actions/CollectionActions';
//Session
import SessionStore from '../../stores/SessionStore';
//Likes
import LikeActions from '../../actions/LikeActions';


const PhotoIndexItem = React.createClass({
  getInitialState: function() {
    return {
      show: false,
      userCollections: []
    };
  },
  componentDidMount: function() {
    this.collectionListener = CollectionStore.addListener(this.onCollectionChange)
    CollectionActions.fetchCollections();
  },
  componentWillUnmout() {
    this.collectionListener.remove();
  },
  onCollectionChange() {
    this.setState({
      userCollections: CollectionStore.all()
    });
  },
  fullScreen() {
    $(".profile-container").addClass("fullscreen");
  },
  openCollectionModal(e) {
    e.preventDefault();
    this.setState({show: true})
  },
  close() {
    this.setState({show: false})
  },
  openCollectionForm() {
    $(".collection-modal-right").addClass("hide");
    $("#collection-form").animate({right: "+=600"});
  },
  likePhoto(e) {
    LikeActions.likePhoto(this.props.photoData.id)
  },
  unlikePhoto(e) {
    LikeActions.unlikePhoto(this.props.photoData.id);
  },
  renderModal() {
    let userCollections = this.state.userCollections.map(function (collection) {
      return (
        <CollectionIndexItem key={"id" + collection.id} collectionData={collection} />
      )
    });
    let modalLeftStyles = {
      backgroundImage: `url(${this.props.photoData.url})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <div className="collection-modal-container">
        <Modal show={this.state.show} onHide={this.close} className="collection-modal">
          <div className="collection-modal-wrap">
            <div className="collection-modal-left" style={modalLeftStyles}>
            </div>
            <div className="collection-modal-right">
              <div id="inner-collections-wrap">
                <h1>Add to Collection</h1>
                <a onClick={this.openCollectionForm}>Create a new collection</a>
                {userCollections}
              </div>
            </div>
            <CollectionForm />
          </div>
        </Modal>
      </div>
    )
  },
  render() {
    return (
      <div>
        <div className="item-container">
          <div className="inner-item-container">
            <img src={this.props.photoData.url} id="img" className="img" onClick={this.fullScreen}/>
            <div className="profile-container">
              <div>
                <a href="javascript:void(0)" onClick={this.likePhoto} className="like-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" />{this.props.photoData.likes.length}</a>
                <a href="javascript:void(0)" className="collect-btn" onClick={this.openCollectionModal}>Collect</a>
              </div>
              {this.renderModal()}
              <a href="/" className="image-user">{this.props.photoData.user.first_name} {this.props.photoData.user.last_name}</a>
              <a href={this.props.photoData.url} download className="profile-download-btn">Download</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = PhotoIndexItem;
