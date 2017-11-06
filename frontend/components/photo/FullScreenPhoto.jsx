const React = require('react');
const Modal = require('react-bootstrap').Modal;
const SessionStore = require('../../stores/SessionStore');

const FullScreenPhoto = React.createClass({
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
      <div className="fullscreen-photo">
        <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName={this.props.dialogClassName} style="height: 100vw;">
          <div>
            {this.props.photoData.user.first_name + " " + this.props.photoData.user.last_name}
            {this.checkIfLiked()}
            <a href="javascript:void(0)" className="collect-btn" onClick={this.openCollectionModal}>Collect</a>
            <a href={this.props.photoData.url} download className="profile-download-btn">Download</a>
          </div>
          <div>
            <img src={this.props.photoData.url}/>
          </div>
        </Modal>
      </div>
    )
  }
});

module.exports = FullScreenPhoto;
