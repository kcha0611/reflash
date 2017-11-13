const React = require('react');
const SessionActions = require('../../actions/SessionActions');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const ErrorStore = require('../../stores/ErrorStore');

const SignupForm = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      user_name: ""
    };
  },
  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },
  redirectIfLoggedIn() {
    if (SessionStore.loggedIn()) {
      hashHistory.push('/');
    }
  },
  componentWillUnmount: function() {
    this.sessionListener.remove();
    this.errorListener.remove();
  },
  handleUsernameChange(e) {
    this.setState({user_name: e.target.value})
  },
  handleEmailChange(e) {
    this.setState({email: e.target.value})
  },
  handleFirstnameChange(e) {
    this.setState({first_name: e.target.value})
  },
  handleLastnameChange(e) {
    this.setState({last_name: e.target.value})
  },
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  },
  handleSubmit() {
    SessionActions.signup(this.state);
  },
  fieldErrors(field) {
    const errors = ErrorStore.formErrors('signup');
    if (!errors[field]) { return; }

    const messages = errors[field].map((errorMsg, i) =>
      <li key={i}>{errorMsg}</li>
    );
    return messages[0].props.children.map(function(error) {
      return <li className="form-errors">{error}</li>
    });
  },
  render() {
    return(
      <div>
        <form className="login" onSubmit={this.handleSubmit}>
          <div className="inner-login-wrap">
            <img src="https://unsplash.com/assets/core/logo-black-b37a09de4a228cd8fb72adbabc95931c5090611a0cae8e76f1fd077d378ec080.svg"></img>
            <h1>Join</h1>
            <p>Be a part of Reflash.</p>
            {this.fieldErrors("base")}
            <div className="name-wrap">
              <label className="name-label first">
                <p>First Name</p>
                <input type="text" onChange={this.handleFirstnameChange} value={this.state.first_name}/>
              </label>
              <label className="name-label second">
                <p>Last Name</p>
                <input type="text"  onChange={this.handleLastnameChange} value={this.state.last_name}/>
              </label>
            </div>
            <label>
              <p>Email</p>
              <input type="text" onChange={this.handleEmailChange} value={this.state.email}/>
            </label>
            <label>
              <p>Username</p>
              <input type="text"  onChange={this.handleUsernameChange} value={this.state.user_name}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
            </label>
            <input type="submit" value="Signup" className="login-btn"/>
            <p>Already Joined? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = SignupForm;
