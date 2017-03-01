import React, {Component} from 'react';
import { Parallax } from 'react-parallax';
import { Wrapper } from './appStyles';
import { Details } from './appStyles';
import ListItem from './ListItem';
import DetailsItem from './DetailsItem';
import logo from '../resources/sw_logo_stacked@2x-f2a89ebadbaf.png';
import bgImg from '../resources/Star-field-near-M31.jpg';
import './App.css';

const locations = [
        {
            "name": "Alderaan",
            "rotation_period": "24",
            "orbital_period": "364",
            "diameter": "12500",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grasslands, mountains",
            "surface_water": "40",
            "population": "2000000000",
            "residents": [
                "http://swapi.co/api/people/5/",
                "http://swapi.co/api/people/68/",
                "http://swapi.co/api/people/81/"
            ],
            "films": [
                "http://swapi.co/api/films/6/",
                "http://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:35:48.479000Z",
            "edited": "2014-12-20T20:58:18.420000Z",
            "url": "http://swapi.co/api/planets/2/",
            "image": "http://vignette1.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest/scale-to-width-down/500?cb=20061211013805"
        }
    ]
    ;


class App extends Component {
  render() {
    // filter the array by certain values.
    const detailLocations = locations;

    return (
      <div className="App">
        <Parallax bgImage={bgImg} strength={400} bgHeight="calc(100vh)">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <Wrapper>
            <ul>
                {locations.map(location => <ListItem key={location.name} {...location}/>)}
            </ul>
            <Details>
              {/*Here we could filter the lit by the item we choose with state / redux?*/}
              {detailLocations.map(detailLocation => <DetailsItem key={detailLocation.name} {...detailLocation}/>)}
            </Details>
          </Wrapper>
        </Parallax>
      </div>
    );
  }
}

export default App;
