import React, {Component} from 'react';
import {fetchPicture, _kill} from './actions';
import { database } from './firebaseClient';
import { ImageWrapper } from './appStyles';

export default class DetailsItem extends React.Component {
  componentDidMount = () => {
      const {dispatch, name} = this.props;

      if (name) {
          dispatch(fetchPicture(name));
          database.ref('/lordvaderadminpanel').orderByChild("name").equalTo(name).on('child_added', snap => {
              console.log("snap new", snap.val());
              const newKill = snap.val();
              dispatch(_kill(newKill.name, newKill.amount));
          })
      }
  }

  render() {
    const {picture, dispatch, name} = this.props;
    let population = this.props.population;
    if (this.props.citizensKilled) {
        population -= this.props.citizensKilled;
    }
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
            <li>Population: {population}</li>
            <li>Climate: {this.props.climate}</li>
            <li>Diameter: {this.props.diameter}</li>
            <li>Gravity: {this.props.gravity}</li>
        </ul>
      </div>
    )
  }
};