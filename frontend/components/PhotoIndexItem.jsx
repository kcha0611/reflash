const React = require('react');
const PhotoActions = require('../actions/PhotoActions');
const Modal = require('react-bootstrap').Modal;
import CollectionModal from 'react-modal';

CollectionModal.defaultStyles.padding = "0";

const PhotoIndexItem = React.createClass({
  getInitialState: function() {
    return {
      show: false
    };
  },
  componentWillMount() {
    CollectionModal.setAppElement('body');
  },
  likePhoto() {
    PhotoActions.likePhoto(this.props.photoData);
  },
  fullScreen() {
    $(".profile-container").addClass("fullscreen");
  },
  openCollectionForm() {
    this.setState({show: true})
  },
  close() {
    this.setState({show: false})
  },
  backgroundModalLeft() {
    let imageUrl = this.props.photoData.url;
    return <div className="collection-modal-left" style={{ backgroundImage: `url(${imageUrl}`, backgroundPosition: 'center'}} />
  },
  showForm() {
    $('.collection-modal.right')
    $('.collection-form').toggle('slide', {direction: 'right', duration: 200});
  },
  render() {
    return (
      <div id="test">
        <div className="item-container">
          <div className="inner-item-container">
            <img src={this.props.photoData.url} id="img" className="img" onClick={this.fullScreen}/>
            <div className="profile-container">
              <div>
                <a href="javascript:void(0)" onClick={this.likePhoto} className="like-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" />{this.props.photoData.likes}</a>
                <a href="javascript:void(0)" className="collect-btn" onClick={this.openCollectionForm}>Collect</a>
              </div>
                <CollectionModal 
                  isOpen={this.state.show}
                  contentLabel="Collection Modal" 
                  className="collection-modal" 
                  overlayClassName="overlay-modal"
                  >
                    <div className="collection-modal-wrap">
                      <div className="collection-modal-right">
                        <h1>Add to Collection</h1>
                        <a onClick={this.showForm}>Create New Collection</a>
                        {/*Users Collections go here*/}
                        <img src="http://res.cloudinary.com/dllnnnotc/image/upload/v1498153098/ic_close_black_36px_awkepz.svg" onClick={this.close}/>
                    <form className="collection-form">
                      <h1>Create New Collection</h1>
                      <label>
                        Name
                        <input type="text" />
                      </label>
                    </form>
                      </div>
                      {this.backgroundModalLeft()}
                    </div>
                </CollectionModal>
              <a href="/" className="image-user">{this.props.photoData.user.first_name + " "} {this.props.photoData.user.last_name}</a>
              <a href={this.props.photoData.url} download className="profile-download-btn">Download</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = PhotoIndexItem;



{/*<img src={this.props.photoData.url} id="clip-path" className="collection-modal-img"/>*/}

                  {/*  <div className="collection-modal-left" style={{background: 'url('+ this.props.photoData.url + ') noRepeat center center fixed'}}>
                      
                    </div>*/}