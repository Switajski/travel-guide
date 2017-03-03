import React, {Component} from 'react';
import {fetchPicture} from './actions';
import { ImageWrapper } from './appStyles';
export default class DetailsItem extends React.Component {
  componentDidMount = () => {
      const {dispatch, name} = this.props;

      if (name) {
          dispatch(fetchPicture(name));
      }
  }

  render() {
    const {picture, dispatch, name} = this.props;
    console.log("this.props render", this.props)
    return (
      <div>
        <ImageWrapper>
          {!picture.isFetching
            ? <img src={picture.image} onClick={() => dispatch(fetchPicture(name))} alt={name} role="presentation"/>
            :<div className="loader">Loading</div> }
        </ImageWrapper>
        <h2>{name}</h2>
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