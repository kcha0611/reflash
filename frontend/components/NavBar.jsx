import React from 'react';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;
import SearchBar from './search/SearchBar';
import SearchResult from './search/SearchResult';
import SessionStore from '../stores/SessionStore';
import SessionActions from '../actions/SessionActions';

const NavBar = React.createClass({
  redirectTo(e) {
    hashHistory.push(`${e.target.name}`);
  },
  logout() {
    SessionActions.logout();
  },
  handleCurrentUser() {
    if (SessionStore.loggedIn()) {
      return (
        <a href="javascript:void(0)" onClick={this.logout}>Logout</a>
      )
    } else {
      return (
        <div>
          <a href="javascript:void(0)" name="login" onClick={this.redirectTo}>Login</a>
          <a href="javascript:void(0)" name="signup" onClick={this.redirectTo}>Signup</a>
        </div>
      )
    }
  },
  receiveSearchInput(searchInput) {
    this.props.receiveSearchInput(searchInput)
  },
  render() {
    return (
      <div>
        <div className="navbar-container">
          <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,w_60/v1495477878/Unsplash_logo_mub2w6.jpg"/>
          <SearchBar receiveSearchInput={this.receiveSearchInput}/>
          <a href="/">Home</a>
          <Link to="/photos/new" className="new-photo-link">Submit Photo</Link>
          {this.handleCurrentUser()}
        </div>
      </div>
    )
  }
});

module.exports = NavBar;
