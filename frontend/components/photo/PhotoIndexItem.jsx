const React = require('react');
const PhotoActions = require('../../actions/PhotoActions');
const Modal = require('react-bootstrap').Modal;
const CollectionModal = require('../collection/CollectionModal');
import CollectionForm from '../forms/CollectionForm';

const PhotoIndexItem = React.createClass({
  getInitialState: function() {
    return {
      show: false
    };
  },
  likePhoto() {
    PhotoActions.likePhoto(this.props.photoData);
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
    $("#inner-collections-wrap").hide();
    $("#collection-form").addClass("slidein");
  },
  render() {
    let modalLeftStyles = {
      backgroundImage: `url(${this.props.photoData.url})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    let collectionModal = (
      <div className="collection-modal-container">
        <Modal show={this.state.show} onHide={this.close} className="collection-modal">
          <div className="collection-modal-wrap">
            <div className="collection-modal-left" style={modalLeftStyles}>
            </div>
            <div className="collection-modal-right">
              <div id="inner-collections-wrap">
                <h1>Add to Collection</h1>
                <a onClick={this.openCollectionForm}>Create a new collection</a>
              </div>
              <CollectionForm />
            </div>
          </div>
        </Modal>
      </div>
    )
    return (
      <div>
        <div className="item-container">
          <div className="inner-item-container">
            <img src={this.props.photoData.url} id="img" className="img" onClick={this.fullScreen}/>
            <div className="profile-container">
              <div>
                <a href="javascript:void(0)" onClick={this.likePhoto} className="like-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" />{this.props.photoData.likes}</a>
                <a href="javascript:void(0)" className="collect-btn" onClick={this.openCollectionModal}>Collect</a>
              </div>
              {collectionModal}

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
