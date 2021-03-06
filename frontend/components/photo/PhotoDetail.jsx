const React = require('react');
const PhotoStore = require('../../stores/PhotoStore');
const PhotoActions = require('../../actions/PhotoActions');
const Modal = require('react-bootstrap').Modal;

const PhotoDetail = React.createClass({
  getInitialState: function() {
    const potential = PhotoStore.find(parseInt(this.props.params.photoID));
    const final = potential ? potential : {};
    return {
      photo: final,
      show: false
    };
  },
  componentDidMount: function() {
    this.photoListener = PhotoStore.addListener(this.onChange);
    PhotoActions.getPhoto(parseInt(this.props.params.photoID));
  },
  componentWillUnmount: function() {
    this.photoListener.remove();
  },
  onChange() {
    const potential = PhotoStore.find(parseInt(this.props.params.photoID));
    const final = potential ? potential : {};
    this.setState({photo: final});
  },
  render() {
    return (
      <div>
          <img src={this.state.photo.url}/>
      </div>
    )
  }
});

module.exports = PhotoDetail;
