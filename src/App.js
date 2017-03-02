import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Wrapper } from './appStyles';
import { Details } from './appStyles';
import { SearchInputForm } from './appStyles';
import { Vader } from './appStyles';
import ListItem from './ListItem';
import DetailsItem from './DetailsItem';
import logo from '../resources/sw_logo_stacked@2x-f2a89ebadbaf.png';
import bgImg from '../resources/Star-field-near-M31.jpg';
import './App.css';
import locations from './Data';
import { connect } from 'react-redux';
import SearchInput from './searchInput'
import { CHANGE_TO_BE_KILLED, changePlanet } from './actions';

class App extends Component {

  constructor(props) {
    super(props);

    let indexedLocations = [];
    locations.forEach((location) => {
      indexedLocations[location.name] = location;
    }) 

    this.indexedLocations = indexedLocations
  }

  cachedKilled = (name) => {

  }

  onTodoAdd = (text) => {
    this.props.dispatch(changePlanet(text));
  }

  render() {
    const pictureFetched = this.props.state.pictures.find(
        (picture) => {
            return picture.planetName === this.props.state.chosenPlanet
        }
    ) || {isFetching: true};
    console.log("pictureFetched", pictureFetched);

    const detailLocations = locations;
    return (
      <div className="App">
        <Parallax bgImage={bgImg} strength={400} bgHeight="calc(100vh)">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Wrapper>
            <SearchInputForm>
            <SearchInput onSearchProp={this.onTodoAdd} />
            </SearchInputForm>
            <ul>
              {locations.map(location => <ListItem 
              key={location.name} {...location} 
              onClick={() => this.props.dispatch(changePlanet(location.name))} 
              killed={() => this.cachedKilled(location.name)}/> )}
            </ul>
            <Details>
              <DetailsItem {...this.indexedLocations[this.props.state.chosenPlanet]} picture={pictureFetched} dispatch={this.props.dispatch}/>
            </Details>
            <Vader>
            <p className="vaderRed">Amount of people Darth Vader should kill</p>
              <input 
              value={this.props.toBeKilled} 
              onChange={() => CHANGE_TO_BE_KILLED(location.name)}
              placeholder="Use the Dark side"
              />
            </Vader>
          </Wrapper>
        </Parallax>

      </div>
    );
  }
}
const mapStateToProps = state => {
    return {state}
};

export default connect(mapStateToProps)(App)