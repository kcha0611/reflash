const React = require('react');
const SearchStore = require('../../stores/SearchStore');

const SearchResult = React.createClass({
  getInitialState: function() {
    return {
      photoResults: [],
      collectionResults: [],
      userResults: []
    };
  },
  componentDidMount: function() {
    this.photoSearchListener = SearchStore.addListener(this._onChange);
    this.collectionSearchListener = SearchStore.addListener(this._onChange);
    this.userSearchListener = SearchStore.addListener(this._onChange);
  },
  _onChange: function() {
    this.setState({
      photoResults: SearchStore.allPhotos(),
      collectionResults: SearchStore.allCollections(),
      userResults: SearchStore.allUsers()
    });
  },
  handleRenderPhotos() {
    return this.state.photoResults.map(function(photo) {
      return (
        <div>
          <img src={photo.url}/>
        </div>
      )
    });
  },
  handleRenderCollections() {
    return this.state.collectionResults.map(function(collection) {
      return (
        <div>
          <img src={collection.name}/>
        </div>
      )
    });
  }
  handleRenderUsers() {
    return this.state.userResults.map(function(user) {
      return (
        <div>
          <img src={user.first_name}/>
        </div>
      )
    });
  }
  render() {

    return (
      <div>
        {this.handleRenderPhotos()}
        {this.handleRenderUsers()}
        {this.handleRenderCollections()}
      </div>
    )
  }
});

module.exports = SearchResult;
