const React = require('react');
const PhotoActions = require('../../actions/PhotoActions');
//Bootstrap
const Modal = require('react-bootstrap').Modal;
//Collections
import CollectionStore from '../../stores/CollectionStore';
import CollectionIndexItem from '../collection/CollectionIndexItem';
import CollectionActions from '../../actions/CollectionActions';
import CollectionModal from '../collection/CollectionModal';
//Session
import SessionStore from '../../stores/SessionStore';
//Likes
import LikeActions from '../../actions/LikeActions';
//Photo
import PhotoStore from '../../stores/PhotoStore';

const PhotoIndexItem = React.createClass({
  getInitialState: function() {
    return {
      show: false,
      liked: this.photoLiked(this.props.photoData)
    };
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
  fullScreen() {
    $(".profile-container").addClass("fullscreen");
  },
  openCollectionModal(e) {
    e.preventDefault();
    this.setState({show: true});
  },
  close() {
    this.setState({show: false});
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
              <CollectionModal photoData={this.props.photoData} show={this.state.show} onHide={this.close}/>
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
