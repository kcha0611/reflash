const React = require('react');
const PhotoActions = require('../../actions/PhotoActions');
const LikeActions = require('../../actions/LikeActions');
const CollectionModal = require('../collection/CollectionModal');

const GridPhotoIndexItem = React.createClass({
  getInitialState: function() {
    return {
      show: false,
      liked: this.photoLiked(this.props.photoData)
    };
  },
  openCollectionModal(e) {
    e.preventDefault();
    this.setState({show: true});
  },
  close() {
    this.setState({show: false});
  },
  fullScreen() {
    $(".profile-container").addClass("fullscreen");
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      liked: this.photoLiked(nextProps.photoData)
    });
  },
  photoLiked(photo) {
    return photo.likes.some( like => {
      return like.user_id === this.props.currentUser.id
    });
  },
  handleLike() {
    if (this.state.liked) {
      LikeActions.unlikePhoto(this.props.photoData.id);
    } else {
      LikeActions.likePhoto(this.props.photoData.id);
    }
  },
  checkIfLiked() {
    if (this.state.liked) {
      return (
        <a href="javascript:void(0)" onClick={this.handleLike} className="like-btn liked"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" className="grid-like"/>{this.props.photoData.likes.length}</a>
      )
    } else {
      return (
        <a href="javascript:void(0)" onClick={this.handleLike} className="like-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" className="grid-like"/>{this.props.photoData.likes.length}</a>
      )
    }
  },
  render() {
    return (
      <div className="grid-item-container grid">
        <img src={this.props.photoData.url} id="img" className="img" onClick={this.fullScreen}/>
        <div>
          {this.checkIfLiked()}
          <CollectionModal photoData={this.props.photoData} show={this.state.show} onHide={this.close}/>
          <a href="javascript:void(0)" className="collect-btn" onClick={this.openCollectionModal}>Collect</a>
          <a href={this.props.photoData.url} download className="profile-download-btn grid-dload-btn">Download</a>
        </div>
      </div>
    )
  }
})

module.exports = GridPhotoIndexItem;
