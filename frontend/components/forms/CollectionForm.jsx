import CollectionActions from '../../actions/CollectionActions';
import React from 'react';

class CollectionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: ""
    }
    this.changeInput = this.changeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeInput(e) {
    let newState = e.target.value;
    this.setState({
      [e.target.name]: newState
    });
  }
  onSubmit() {
    debugger
    CollectionActions.createCollection(this.state);
  }
  closeCollectionForm() {
    $("#collection-form").removeClass("slidein");
    $("#inner-collections-wrap").show();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="collection form" id="collection-form">
          <h1>Create new collection</h1>
          <label>
            Name
            <input type="text" onChange={this.changeInput} name="name"/>
          </label>
          <label>
            Description
            <input type="textarea" onChange={this.changeInput} name="description"/>
          </label>
          <div className="collection-btn-wrap">
            <div>
              <input type="submit" value="Create collection" className="collection-submit-btn"/>
            </div>
            <div>
              <button onClick={this.closeCollectionForm}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CollectionForm;
