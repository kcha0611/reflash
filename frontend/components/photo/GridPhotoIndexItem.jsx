const React = require('react');
const PhotoActions = require('../../actions/PhotoActions');

const GridPhotoIndexItem = React.createClass({
  likePhoto() {
    PhotoActions.likePhoto(this.props.gridPhotoData);
  },
  fullScreen() {
    $(".profile-container").addClass("fullscreen");
  },
  render() {
    return (
      <div className="grid-item-container grid">
        <img src={this.props.gridPhotoData.url} id="img" className="img" onClick={this.fullScreen}/>
      </div>
    )
  }
})

module.exports = GridPhotoIndexItem;
