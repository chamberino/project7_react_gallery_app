import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  state = {
    topic: 'dogs'
  }

  handleLinks = () => {
    this.props.topicChange(this.state.topic);
  }

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/cats">Cats</NavLink></li>

          <li><NavLink to="/dogs" onClick={this.handleLinks}>Dogs</NavLink></li>

          <li><NavLink to="/computers">Computers</NavLink></li>
        </ul>
      </nav>
    );
  }
}
