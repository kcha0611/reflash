const React = require('react');
const PhotoStore = require('../stores/PhotoStore');

const SearchResult = React.createClass({
  getInitialState: function() {
    return {
      results: []
    };
  },
  componentDidMount: function() {
    this.photoListener = PhotoStore.addListener(this._onChange);
  },
  _onChange: function() {
    debugger
    this.setState({results: PhotoStore.all()});
  },
  render() {
    let results = this.state.results.map(function(result) {
      return (
        <div>
          <img src={result.url}/>
        </div>
      )
    })
    return (
      <div>
        {results}
      </div>
    )
  }
})

module.exports = SearchResult;
