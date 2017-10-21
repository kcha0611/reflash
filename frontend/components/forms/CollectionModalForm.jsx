import React from 'react';
const CollectionActions = require('../../actions/CollectionActions');
//Errors
import ErrorStore from '../../stores/ErrorStore';
import ErrorActions from '../../actions/ErrorActions';

const CollectionModalForm = React.createClass({
  getInitialState: function() {
    return {
      name: "",
      description: ""
    };
  },
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },
  changeInput(e) {
    e.preventDefault();
    let newState = e.target.value;
    this.setState({
      [e.target.name]: newState
    });
  },
  onSubmit(e) {
    e.preventDefault();
    CollectionActions.createModalCollection(this.state);
  },
  closeCollectionForm(e) {
    e.preventDefault();
    $("#collection-form").animate({right: "-=600"}, function() {
      $(".collection-modal-right").removeClass("hide");
    });
  },
  errors() {
    const errors = ErrorStore.formErrors("Collection");
    const messages = errors.map( (errorMsg, i) => {
      return <li key={i}>{ errorMsg }</li>;
      });
      return <ul>{ messages }</ul>;
    },
    render() {
      return (
        <div className="form-wrap" id="collection-form">
          <form className="collection form" onSubmit={this.onSubmit}>
            <h1>Create new collection</h1>
            <label>
              Name
              <input type="text" onChange={this.changeInput} name="name"/>
            </label>
            <label>
              Description
              <textarea style={{height: 86}} onChange={this.changeInput} name="description"/>
            </label>
            <div className="collection-btn-wrap">
              <div>
                <input type="submit" value="Create collection" className="collection-submit-btn" />
              </div>
              <div>
                <a onClick={this.closeCollectionForm}>Cancel</a>
              </div>
            </div>
          </form>
        </div>
      )
    }
});

module.exports = CollectionModalForm;
