const React = require('react');
const PhotoActions = require('../actions/PhotoActions');

const PhotoIndexItem = React.createClass({
  likePhoto() {
    PhotoActions.likePhoto(this.props.photoData);
  },
  fullScreen() {
    $(".profile-container").addClass("fullscreen");
  },
  render() {
    return (
      <div className="item-container">
        <div className="inner-item-container">
          <img src={this.props.photoData.url} id="img" className="img" onClick={this.fullScreen}/>
          <div className="profile-container">
            <div>
              <a href="javascript:void(0)" onClick={this.likePhoto} className="like-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" />{this.props.photoData.likes}</a>
              <a className="collect-btn">Collect</a>
            </div>
            <a href="/" className="image-user">{this.props.photoData.user.first_name} {this.props.photoData.user.last_name}</a>
            <a href={this.props.photoData.url} download className="profile-download-btn">Download</a>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = PhotoIndexItem;
