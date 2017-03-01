import React, {Component} from 'react';

export default class ListItem extends React.Component {
    render() {
        return <li>Name: {this.props.name} - Location: {this.props.location}</li>
    }
};