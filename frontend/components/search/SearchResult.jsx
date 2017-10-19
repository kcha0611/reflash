const React = require('react');
const SearchStore = require('../../stores/SearchStore');
const PhotoIndexItem = require('../photo/PhotoIndexItem');
const SessionStore = require('../../stores/SessionStore');
const CollectionIndexItem = require('../collection/CollectionIndexItem');
const UserIndexItem = require('../UserIndexItem');

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
        <PhotoIndexItem key={photo.id} photoData={photo} currentUser={SessionStore.currentUser()} />
      )
    });
  },
  handleRenderCollections() {
    let that = this;
    return this.state.collectionResults.map(function(collection) {
      return (
        <CollectionIndexItem key={collection.id} collectionData={collection} />
      )
    });
  },
  handleRenderUsers() {
    let that = this;
    return this.state.userResults.map(function(user) {
      return (
        <UserIndexItem key={user.id} userData={user} />
      )
    });
  },
  onTabClick() {

  },
  render() {

    return (
      <div>
        <div className="navtab-wrap">
          <div className="inner-navtab-wrap">
            <a className="active">{this.state.photoResults.length} Photos</a>
            <a>{this.state.collectionResults.length} Collections</a>
            <a>{this.state.userResults.length} Users</a>
          </div>
        </div>
        <h1 className="search-input">{this.props.searchInput}</h1>
        {this.handleRenderPhotos()}
        {this.handleRenderCollections()}
        {this.handleRenderUsers()}
      </div>
    )
  }
});

module.exports = SearchResult;
