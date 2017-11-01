//React
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
//Photo
const PhotoStore = require('../../stores/PhotoStore');
const PhotoActions = require('../../actions/PhotoActions');
const PhotoIndexItem = require('./PhotoIndexItem');
//Session
const SessionStore = require('../../stores/SessionStore');
//Search
const SearchResult = require('../search/SearchResult');
const SearchStore = require('../../stores/SearchStore');
const SearchActions = require('../../actions/SearchActions');

const PhotoIndex = React.createClass({
  getInitialState: function() {
    return {
      photos: [],
      photoResults: [],
      collectionResults: [],
      userResults: [],
      searchInput: this.props.searchInput
    };
  },
  componentDidMount: function() {
    this.photoListener = PhotoStore.addListener(this.onChange);
    this.photoSearchListener = SearchStore.addListener(this.onSearchChange);
    this.collectionSearchListener = SearchStore.addListener(this.onSearchChange);
    this.userSearchListener = SearchStore.addListener(this.onSearchChange);
    PhotoActions.fetchPhotos();
  },
  componentWillUnmount: function() {
    this.photoListener.remove();
    this.photoSearchListener.remove();
    this.collectionSearchListener.remove();
    this.userSearchListener.remove();
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      searchInput: nextProps.searchInput
    });
  },
  onChange() {
    this.setState({
      photos: PhotoStore.all()
    });
  },
  onSearchChange() {
    this.setState({
      photoResults: SearchStore.allPhotos(),
      collectionResults: SearchStore.allCollections(),
      userResults: SearchStore.allUsers()
    })
  },
  onGridTab() {
    $(".inner-item-container").addClass('grid');
    $(".item-container").addClass('grid');
  },
  handleSearch() {
    let searchedPhotos = this.state.photoResults.filter(function(el){ return el != undefined});
    let searchedCollections = this.state.collectionResults.filter(function(el){ return el != undefined});
    let searchedUsers = this.state.userResults.filter(function(el){ return el != undefined});
    if (this.state.searchInput !== "") {
      return (
        <SearchResult searchedPhotos={searchedPhotos} searchedCollections={searchedCollections} searchedUsers={searchedUsers}/>
      )
    } else {
      return this.state.photos.map(function (photo) {
        return (
          <PhotoIndexItem key={photo.id} photoData={photo} />
        )
      });
    }
  },
  render() {
    return (
      <div>
        <div className="inner-index-wrap">
          <div className="inner-index-container">
            <h1>Reflash</h1>
            <p>Beautiful, Free Photos.</p>
            <p>Gifted by the world's most generous community of photographers.</p>
            <Link to="/gridphotos">Grid</Link>
          </div>
        </div>
          {this.handleSearch()}
      </div>
    )
  }
})

module.exports = PhotoIndex;
