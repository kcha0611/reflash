const React = require('react');
const NavBar = require('./NavBar');

const App = React.createClass({
  render() {
    return (
      <div>
        <NavBar></NavBar>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
