import React, { Component } from 'react';


class SearchBar extends Component {
  // constructor(props) {
  //   super(props);

  //   this.onInputChange = this.onInputChange.bind(this);
  // }

  state = { term: '' }

  componentDidUpdate() {
    console.log('term: ', this.state.term)
  }

  // arrow function style to prevent rebinding of this
  onInputChange = (e) => {
    this.setState({ term: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }


  // we have to rebind this for this function in the constructor
  // onInputChange(e) {
  //   this.setState({term: e.target.value})
  // }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search_bar">Image Search</label>
            <input
              id="search_bar"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}


export default SearchBar;