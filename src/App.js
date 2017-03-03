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
import { connect } from 'react-redux';
import SearchInput from './searchInput';
import { CHANGE_TO_BE_KILLED, changePlanet, kill } from './actions';
import { fetchPosts, invalidateSwapi} from './actions';

class App extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchPosts());
  }

  onKill = (evt) => {
    evt.preventDefault()
    debugger;
    this.props.dispatch(kill(this.props.state.chosenPlanet, this.props.state.amountToBeKilled))
  }

  onTodoAdd = (text) => {
    this.props.dispatch(changePlanet(text));
  }

  render() {

    const chosenPlanet = Object.values(this.props.state.postsBySwapi.items).find((post) => {
      return post.name === this.props.state.pictures.chosenPlanet;
    });

    const { posts, isFetching, lastUpdated } = this.props;
    const pictureFetched = this.props.state.pictures.pictures.find(
      (picture) => {
          return picture.planetName === this.props.state.pictures.chosenPlanet
      }
    ) || {isFetching: true};
    console.log("pictureFetched", pictureFetched);
    const locations = [];
    Object.keys(this.props.state.indexedLocations).forEach(key => {
      locations.push(this.props.state.indexedLocations[key]);
    });

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
              {this.props.state.postsBySwapi.items.map(location => 
              <ListItem 
                key={location.name} {...location} 
                onClicks={() => this.props.dispatch(changePlanet(location.name))} 
                killed={() => this.cachedKilled(location.name)}
              /> )}
            </ul>

            <Details>
              <DetailsItem {...chosenPlanet} picture={pictureFetched} dispatch={this.props.dispatch}/>
            </Details>

            <Vader>
            <p className="vaderRed">Amount of people Darth Vader should kill</p>
              <form onSubmit={this.onKill}> <input 
              value={this.props.amountToBeKilled} 
              onChange={(evt) => this.props.dispatch(changeToBeKilled(this.props.state.chosenPlanet, evt.target.value))}
              placeholder="Use the Dark side"
              />
              </form>
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