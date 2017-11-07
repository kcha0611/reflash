const React = require('react');
const PhotoActions = require('../../actions/PhotoActions');
const LikeActions = require('../../actions/LikeActions');
const CollectionModal = require('../collection/CollectionModal');
const LoginFormModal = require('../forms/LoginFormModal');
const FullScreenPhoto = require('./FullScreenPhoto');
const SessionStore = require('../../stores/SessionStore');

const GridPhotoIndexItem = React.createClass({
  getInitialState: function() {
    return {
      collectionModalShow: false,
      loginModalShow: false,
      liked: this.photoLiked(this.props.photoData),
      actionType: "",
      fullScreenShow: false
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
      this.setState({loginModalShow: true, actionType: "collect"});
    }
  },
  fullScreenModal(e) {
    e.preventDefault();
    this.setState({fullScreenShow: true});
  },
  closeFullScreen() {
    this.setState({fullScreenShow: false});
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
      this.setState({loginModalShow: true, actionType: "like"});
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
      <div className="grid-item-container grid">
        <img src={this.props.photoData.url} id="img" className="img" onClick={this.fullScreenModal}/>
        <div className="grid-btns">
          {this.checkIfLiked()}
          <FullScreenPhoto photoData={this.props.photoData} show={this.state.fullScreenShow} onHide={this.closeFullScreen} dialogClassName="fullscreen-modal" actionType={this.state.actionType}/>
          <CollectionModal photoData={this.props.photoData} show={this.state.collectionModalShow} onHide={this.closeCollectionModal} dialogClassName="collection-modal" actionType={this.state.actionType}/>
          <LoginFormModal photoData={this.props.photoData} show={this.state.loginModalShow} onHide={this.closeLoginModal} dialogClassName="login-modal-container" actionType={this.state.actionType}/>
          <a href="javascript:void(0)" className="collect-btn" onClick={this.openCollectionModal}>Collect</a>
          <a href={this.props.photoData.url} download className="profile-download-btn grid-dload-btn">Download</a>
        </div>
      </div>
    )
  }
})

module.exports = GridPhotoIndexItem;
