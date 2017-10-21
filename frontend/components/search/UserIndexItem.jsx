const React = require('react');

const UserIndexItem = React.createClass({
  render () {
    return (
      <div>
        {this.props.userData.user_name}
      </div>
    )
  }
});

module.exports = UserIndexItem;
