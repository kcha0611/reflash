const React = require('react');
const PhotoActions = require('../../actions/PhotoActions');
//Bootstrap
const Modal = require('react-bootstrap').Modal;
//Collections
const CollectionStore = require('../../stores/CollectionStore');
const CollectionModalItem = require('../collection/CollectionModalItem');
const CollectionActions = require('../../actions/CollectionActions');
const CollectionModal = require('../collection/CollectionModal');
//Session
const SessionStore = require('../../stores/SessionStore');
//Likes
const LikeActions = require('../../actions/LikeActions');
//Photo
const PhotoStore = require('../../stores/PhotoStore');
//Login Modal
const LoginFormModal = require('../forms/LoginFormModal');


const PhotoIndexItem = React.createClass({
  getInitialState: function() {
    return {
      collectionModalShow: false,
      loginModalShow: false,
      liked: this.photoLiked(this.props.photoData),
      actionType: ""
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
  fullScreen() {
    $(".profile-container").addClass("fullscreen");
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
    return (
      <div>
        <div className="item-container">
          <div className="inner-item-container">
            <img src={this.props.photoData.url} id="img" className="img" onClick={this.fullScreen}/>
            <div className="profile-container">
              <div>
                {this.checkIfLiked()}
                <a href="javascript:void(0)" className="collect-btn" onClick={this.openCollectionModal}>Collect</a>
              </div>
              <CollectionModal photoData={this.props.photoData} show={this.state.collectionModalShow} onHide={this.closeCollectionModal}/>
              <LoginFormModal photoData={this.props.photoData} show={this.state.loginModalShow} onHide={this.closeLoginModal}/>
              <a href="/" className="image-user">{this.props.photoData.user.first_name + " " + this.props.photoData.user.last_name}</a>
              <a href={this.props.photoData.url} download className="profile-download-btn">Download</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = PhotoIndexItem;
