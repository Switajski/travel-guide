/**
 * This component should render a controlled input for text
 */
import React, { Component } from 'react';

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // default state.
      value: ''
    };
  };

  onType = (changeEvent) => {
    this.setState({
      value: changeEvent.target.value
    });
  }

  // Add a new item to the list
  handleTodoSearch = (changeEvent) => {
    this.props.onSearchProp(this.state.value);
    //set a default empty state
    this.setState({ value:'' });
    changeEvent.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleTodoSearch}>
        <input
          type="text"
          placeholder="Search"
          value={this.state.value}
          onChange={this.onType}
        />
      </form>
    )
  }
}

export default SearchInput;
