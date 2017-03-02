import React, { Component } from 'react';

export default class ListItem extends React.Component {
  render() {
    return (
      <li onClick={this.props.onClicks}>{this.props.name}</li>
    )
  }
};

// AIzaSyCv6f1yvgbhzkOgArqNn3LvGryg7Wxp-Xs