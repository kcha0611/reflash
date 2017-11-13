const React = require('react');
const Modal = require('react-bootstrap').Modal;
const SessionStore = require('../../stores/SessionStore');
const SessionActions = require('../../actions/SessionActions');
const ErrorStore = require('../../stores/SessionStore');

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
  redirectIfLoggedIn() {
    if (SessionStore.loggedIn()) {
      window.location.reload();
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    SessionActions.login(this.state);
  },
  guestLogin(e) {
    e.preventDefault();
    SessionActions.login({username: "guest", password: "123456"});
  },
  render() {
    let modalLeftStyles = {
      backgroundImage: `url(${this.props.photoData.url})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <div className="login-form-modal-container">
        <Modal show={this.props.show} onHide={this.props.onHide} dialogClassName={this.props.dialogClassName}>
          <form onSubmit={this.handleSubmit} className="login-form-modal login">
            <div className="login-modal left" style={modalLeftStyles}>
            </div>
            <div className="login-modal right">
              <img src="https://unsplash.com/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"></img>
              <h1 className="login-content">Login</h1>
              <p className="login-content">To {this.props.actionType} {this.props.photoData.user.first_name + " " + this.props.photoData.user.last_name}s Photo, login.</p>
              <input type="submit" value="Guest Login" className="guest-login-btn login-modal-input" onClick={this.guestLogin}/>
              <p className="or login-content">OR</p>
              <label className="login-modal-label">
                <p>Username</p>
                <input type="text" onChange={this.handleUsernameChange}/>
              </label>
              <label className="login-modal-label">
                <p>Password</p>
                <input type="password" onChange={this.handlePasswordChange}/>
              </label>
              <input type="submit" value="Login" className="login-btn login-modal-input"/>

            </div>
          </form>
        </Modal>
      </div>
    )
  }
});

module.exports = LoginFormModal;
