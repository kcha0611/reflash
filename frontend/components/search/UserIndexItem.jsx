const React = require('react');

const UserIndexItem = React.createClass({
  render () {
    let firstImageStyles = {
      backgroundImage: `url(${this.props.userData.photos[0].url})`,
      backgroundPosition: "50%",
      backgroundSize: "cover"
    }
    let secondImageStyles = {
      backgroundImage: `url(${this.props.userData.photos[1].url})`,
      backgroundPosition: "50%",
      backgroundSize: "cover"
    }
    let thirdImageStyles = {
      backgroundImage: `url(${this.props.userData.photos[2].url})`,
      backgroundPosition: "50%",
      backgroundSize: "cover"
    }
    return (
      <div className='user-item'>
        <div>
          <h1>
            {this.props.userData.first_name + this.props.userData.last_name}
          </h1>
          <p>@{this.props.userData.user_name}</p>
        </div>
        <div>
          <div style={firstImageStyles}></div>
          <div style={secondImageStyles}></div>
          <div style={thirdImageStyles}></div>
        </div>
      </div>
    )
  }
});

module.exports = UserIndexItem;
