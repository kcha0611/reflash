const React = require('react');
const SearchStore = require('../../stores/SearchStore');
const PhotoIndexItem = require('../photo/PhotoIndexItem');
const CollectionIndexItem = require('../collection/CollectionIndexItem');
const UserIndexItem = require('./UserIndexItem');
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const Grid = require('react-bootstrap').Grid;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;

const SearchResult = React.createClass({
  handleRenderPhotos() {
    return this.props.searchedPhotos.map(function(photo) {
      return (
        <PhotoIndexItem key={photo.id} photoData={photo} currentUser={SessionStore.currentUser()} />
      )
    });
  },
  handleRenderCollections() {
    return this.props.searchedCollections.map(function(collection) {
      return (
        <CollectionIndexItem key={collection.id} collectionData={collection} />
      )
    });
  },
  handleRenderUsers() {
    return this.props.searchedUsers.map(function(user) {
      return (
        <UserIndexItem key={user.id} userData={user} />
      )
    });
  },
  handleResultsLength(resultLength) {
    if (resultLength < 0) {
      return 0;
    } else {
      return resultLength;
    }
  },
  render() {
    return (
      <div className="search-result-wrap">
        <div className="inner-result-wrap">
          <h1>{this.props.searchInput}</h1>
          <Tabs>
            <TabList>
              <Tab>{this.handleResultsLength(this.props.searchedPhotos.length)} Photos</Tab>
              <Tab>{this.handleResultsLength(this.props.searchedCollections.length)} Collections</Tab>
              <Tab>{this.handleResultsLength(this.props.searchedUsers.length)} Users</Tab>
            </TabList>
          <Grid>
            <TabPanel>
              <Row>
                <Col xs={6} md={6}>
                  {this.handleRenderPhotos()}
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <Row>
                <Col xs={6} md={6}>
                  {this.handleRenderCollections()}
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <Row>
                <Col xs={6} md={6}>
                  {this.handleRenderUsers()}
                </Col>
              </Row>
            </TabPanel>
          </Grid>
        </Tabs>
        </div>
      </div>
    )
  }
});

module.exports = SearchResult;
