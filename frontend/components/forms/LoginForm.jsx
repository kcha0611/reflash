const React = require('react');
const SessionActions = require('../../actions/SessionActions');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../../stores/SessionStore');
const ErrorStore = require('../../stores/ErrorStore');

const LoginForm = React.createClass({
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
  redirectIfLoggedIn() {
    if (SessionStore.loggedIn()) {
      hashHistory.push('/')
    }
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
  guestLogin() {
    SessionActions.login({username: "guest", password: "123456"});
  },
  fieldErrors(field) {
    const errors = ErrorStore.formErrors('login');
    if (!errors[field]) { return; }

    const messages = errors[field].map((errorMsg, i) =>
      <li key={i}>{errorMsg}</li>
    );
    return <ul className="form-errors">{messages}</ul>;
  },
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login">
          <div>
            <img src="https://unsplash.com/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"></img>
            <h1>Login</h1>
            <p>Welcome Back.</p>
            <input type="submit" value="Guest Login" className="guest-login-btn"/>
            <p className="or">OR</p>
            {this.fieldErrors("base")}
            <label>
              <p>Username</p>
              <input type="text" onChange={this.handleUsernameChange}/>
            </label>
            <labeL>
              <p>Password</p>
              <input type="password" onChange={this.handlePasswordChange}/>
            </labeL>
            <input type="submit" value="Login" className="login-btn"/>
            <p>Don't have an account? <Link to="/signup">Join</Link></p>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = LoginForm;
