const React = require('react');
const Modal = require('react-bootstrap');

const CollectionModal = React.createClass({
  getInitialState() {
    return {
      show: false
    }
  },
  openCollectionForm() {
    this.setState({show: true})
  },
  close() {
    this.setState({show: false})
  },
  render() {
  	return (
  		<div>
  			<button onClick={this.openCollectionForm}>Collect</button>
  			<Modal show={this.state.show} onHide={this.close}>
  				<Modal.Header>
  					<Modal.Title>
  						Add to Collection
  					</Modal.Title>
  				</Modal.Header>
  				<Modal.Body>
  					Body
  				</Modal.Body>
  			</Modal>
  		</div>
  	)
  }
 });

module.exports = CollectionModal;
