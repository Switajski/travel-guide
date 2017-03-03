import React, { Component } from 'react';

export default class ListItem extends React.Component {
  render() {
    return (
      <li onClick={this.props.onClicks} onMouseEnter={this.props.onMouseEnter}
      onMouseOut={this.props.onMouseOut}>
        {this.props.name}
        <div className="listItem__population"><label>Population: </label> {this.props.population}</div>
      </li>
    )
  }
};