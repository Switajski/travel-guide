import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Wrapper } from './appStyles';
import { Details } from './appStyles';
import ListItem from './ListItem';
import DetailsItem from './DetailsItem';
import logo from '../resources/sw_logo_stacked@2x-f2a89ebadbaf.png';
import bgImg from '../resources/Star-field-near-M31.jpg';
import './App.css';
import locations from './Data';


class App extends Component {

  constructor(props) {
    super(props);

    let indexedLocations = [];
    locations.forEach((location) => {
      indexedLocations[location.name] = location;
    }) 

    this.state = {
      chosenPlanet: 'Alderaan',
      indexedLocations: indexedLocations
    }
  }

  onPlanetClick = (name) => {
    this.setState({
      chosenPlanet : name
    })
  }

  render() {
    // filter the array by certain values.
    const detailLocations = locations;
    return (
      <div className="App">
        <Parallax bgImage={bgImg} strength={400} bgHeight="calc(100vh)">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Wrapper>
            <ul>
              {locations.map(location => <ListItem key={location.name} {...location} onClick={() => this.onPlanetClick(location.name)} /> )}
            </ul>
            <Details>
              {/*Here we could filter the lit by the item we choose with state / redux?*/}
              <DetailsItem {...this.state.indexedLocations[this.state.chosenPlanet]} />
            </Details>
          </Wrapper>
        </Parallax>
      </div>
    );
  }
}

export default App;
