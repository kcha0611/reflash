const React = require('react');
const SearchStore = require('../../stores/SearchStore');
const PhotoIndexItem = require('../photo/PhotoIndexItem');
const SessionStore = require('../../stores/SessionStore');
const CollectionIndexItem = require('../collection/CollectionIndexItem');

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
  componentWillUnmount () {
    this.photoSearchListener.remove();
    this.collectionSearchListener.remove();
    this.userSearchListener.remove();
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
          <PhotoIndexItem key={photo.id} photoData={photo} currentUser={SessionStore.currentUser()} />
        </div>
      )
    });
  },
  handleRenderCollections() {
    return this.state.collectionResults.map(function(collection) {
      return (
        <div>
          <CollectionIndexItem key={collection.id} collectionData={collection} />
        </div>
      )
    });
  },
  handleRenderUsers() {
    return this.state.userResults.map(function(user) {
      return (
        <div>
          {user.user_name}
        </div>
      )
    });
  },
  render() {

    return (
      <div>
        <div className="navtab-wrap">
          <div className="inner-navtab-wrap">
            <a>All</a>
            <a>{this.state.photoResults.length} Photos</a>
            <a>{this.state.collectionResults.length} Collections</a>
            <a>{this.state.userResults.length} Users</a>
          </div>
        </div>
        {this.handleRenderPhotos()}
        {this.handleRenderUsers()}
        {this.handleRenderCollections()}
      </div>
    )
  }
});

module.exports = SearchResult;
