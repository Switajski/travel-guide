import React, {Component} from 'react';

export default class ListItem extends React.Component {
    render() {
        return <li>Planet: {this.props.name} - Location: {this.props.location}</li>
    }
};

// AIzaSyCv6f1yvgbhzkOgArqNn3LvGryg7Wxp-Xs