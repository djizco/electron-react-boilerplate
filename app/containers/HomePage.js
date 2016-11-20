import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import Home from '../components/Home';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleToCounter = (e) => {
    e.preventDefault();

    hashHistory.push('counter');
  }

  handleToTodo = (e) => {
    e.preventDefault();

    hashHistory.push('todo');
  }

  render() {
    return (
      <Home toTodo={this.handleToTodo} toCounter={this.handleToCounter} />
    );
  }
}
