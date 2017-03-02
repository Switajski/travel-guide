import React, {Component} from 'react';

export default class DetailsItem extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.name} role="presentation"/>
        <h2>{this.props.name}</h2>
        <ul>
          <li>Population: {this.props.population}</li>
          <li>Climate: {this.props.climate}</li>
          <li>Diameter: {this.props.diameter}</li>
          <li>Gravity: {this.props.gravity}</li>
        </ul>
      </div>
    )
  }
};