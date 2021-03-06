const React = require('react');
const Modal = require('react-bootstrap').Modal;
const SessionStore = require('../../stores/SessionStore');
const CollectionModal = require('../collection/CollectionModal');
const LoginFormModal = require('../forms/LoginFormModal');

const FullScreenPhoto = React.createClass({
  getInitialState: function() {
    return {
      collectionModalShow: false,
      loginModalShow: false,
      liked: this.photoLiked(this.props.photoData),
      actionType: this.props.actionType
    };
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      liked: this.photoLiked(nextProps.photoData)
    });
  },
  photoLiked(photo) {
    return photo.likes.some( like => {
      return like.user_id === SessionStore.currentUser().id
    });
  },
  openCollectionModal(e) {
    e.preventDefault();
    if (SessionStore.loggedIn()) {
      this.setState({collectionModalShow: true});
    } else {
      this.setState({loginModalShow: true});
    }
  },
  closeCollectionModal() {
    this.setState({collectionModalShow: false});
  },
  closeLoginModal() {
    this.setState({loginModalShow: false});
  },
  handleLike(e) {
    e.preventDefault();
    if (SessionStore.loggedIn()) {
      if (this.state.liked) {
        LikeActions.unlikePhoto(this.props.photoData.id);
      } else {
        LikeActions.likePhoto(this.props.photoData.id);
      }
    } else {
      this.setState({loginModalShow: true});
    }
  },
  checkIfLiked() {
    if (this.state.liked) {
      return (
        <a href="javascript:void(0)" onClick={this.handleLike} className="like-btn liked"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" />{this.props.photoData.likes.length}</a>
      )
    } else {
      return (
        <a href="javascript:void(0)" onClick={this.handleLike} className="like-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" />{this.props.photoData.likes.length}</a>
      )
    }
  },
  render() {
    let modalStyles = {
        border: '0',
        bottom: 'auto',
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '20rem',
        width: '80%',
    }
    return (
      <div className="fullscreen-photo">
        <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName={this.props.dialogClassName} style={modalStyles}>
          <div className="fullscreen-prof-container">
            <div>
              {this.props.photoData.user.first_name + " " + this.props.photoData.user.last_name}
              <p>@{this.props.photoData.user.user_name}</p>
            </div>
            <div>
              {this.checkIfLiked()}
              <a href="javascript:void(0)" className="collect-btn" onClick={this.openCollectionModal}>Collect</a>
              <div>
                <a href={this.props.photoData.url} download className="profile-download-btn">Download Free</a>
              </div>
            </div>
          </div>
          <div>
            <img src={this.props.photoData.url} className="fullscreen-img" />
          </div>
          <CollectionModal photoData={this.props.photoData} show={this.state.collectionModalShow} onHide={this.closeCollectionModal} dialogClassName="collection-modal"/>
          <LoginFormModal photoData={this.props.photoData} show={this.state.loginModalShow} onHide={this.closeLoginModal} dialogClassName="login-modal-container"/>
        </Modal>
      </div>
    )
  }
});

module.exports = FullScreenPhoto;
