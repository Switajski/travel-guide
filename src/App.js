import React, {Component} from 'react';
import ListItem from './ListItem';
import logo from './logo.svg';
import './App.css';

const locations = [
    {
        "location": "5th street",
        "name": "Stews bar",
        "coordinates": {
            "long": 1,
            "lat": 2
        },
        "image": "src/logo.svg",
        "details": "Stews bar is the best place to drink according to locals"
    },
    {
        "location": "6th street",
        "name": "Lukas's bar",
        "coordinates": {
            "long": 1,
            "lat": 2
        },
        "image": "src/logo.svg",
        "details": "Stews bar is the worst place to drink according to locals"
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <ul>
                        {locations.map(location => <ListItem {...location}/>)}
                    </ul>
                </p>
            </div>
        );
    }
}

export default App;
