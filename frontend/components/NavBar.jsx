const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const NavBar = React.createClass({
  render() {
    return (
      <div className="navbar-container">
        <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,w_60/v1495477878/Unsplash_logo_mub2w6.jpg"/>
          <input type="text" placeholder="Search Photos"/>
        <a href="/">Home</a>
        <a href="/">New</a>
        <a href="/">Following</a>
        <Link to="/submit">Submit Photo</Link>
      </div>
    )
  }
});

module.exports = NavBar;
