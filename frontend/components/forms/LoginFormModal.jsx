const React = require('react');
const Modal = require('react-bootstrap').Modal;
const SessionStore = require('../../stores/SessionStore');
const SessionActions = require('../../actions/SessionActions');

const LoginFormModal = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: ""
    };
  },
  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },
  handleUsernameChange(e){
    this.setState({username: e.target.value});
  },
  componentWillUnmount() {
    this.sessionListener.remove();
    this.errorListener.remove();
  },
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    SessionActions.login(this.state);
  },
  render() {
    let modalLeftStyles = {
      backgroundImage: `url(${this.props.photoData.url})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <form onSubmit={this.handleSubmit}>
          <div className="login-modal left" style={modalLeftStyles}>
          </div>
          <div className="login-modal right">
            <label>
              Username:
              <input onChange={this.handleUsernameChange}/>
            </label>
            <label>
              Password:
              <input onChange={this.handlePasswordChange}/>
            </label>
          </div>
        </form>
      </Modal>
    )
  }
});

module.exports = LoginFormModal;
