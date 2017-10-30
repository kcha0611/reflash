const React = require('react');
const NavBar = require('./NavBar');
const PhotoIndex = require('./photo/PhotoIndex');
const GridPhotoIndex = require('./photo/GridPhotoIndex');

const App = React.createClass({
  getInitialState: function() {
    return {
      searchInput: ""
    };
  },
  sendSearchInput(searchInput) {
    this.setState({
      searchInput: searchInput
    })
  },
  render() {
    let propsChildren = React.Children.map(this.props.children, (child) => {
      if (child.type === PhotoIndex || child.type === GridPhotoIndex) {
        return React.cloneElement(child, {
          searchInput: this.state.searchInput
        });
      } else {
        return child
      }
    });
    return (
      <div>
        <NavBar receiveSearchInput={this.sendSearchInput}></NavBar>
        {propsChildren}
      </div>
    )
  }
});

module.exports = App;
