const React = require('react');
const PhotoActions = require('../../actions/PhotoActions');
const SessionStore = require('../../stores/SessionStore');

const PhotoForm = React.createClass({
  getInitialState: function() {
    return {
      url: "",
      imagePreviewUrl: "",
      user_id: SessionStore.currentUser().id
    };
  },
  handlePhotoChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
  },
  handleSubmit() {
    PhotoActions.createPhoto({url: this.state.imagePreviewUrl, user_id: this.state.user_id})
  },
  render() {
    return(
      <div className="photo-form-container">
        <form onSubmit={this.handleSubmit} className="photo-submit-form">
          <h1>Submit a photo</h1>
          <p>We'll review your photo for publishing and if <a href="https://community.unsplash.com/help-section/submission-guidelines">your submission is accepted</a>, your work will
            be distributed for free under <a href="https://unsplash.com/license">the Unsplash license</a>.
            <p>Please only upload photos <a href="https://unsplash.com/terms">that you own the rights to</a>.</p>
          </p>
            <input type="file" onChange={(e)=>this.handlePhotoChange(e)}/>
            <input type="submit" value="Add a Photo"/>
        </form>
      </div>
    )
  }
})


module.exports = PhotoForm;
