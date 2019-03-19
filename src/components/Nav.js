import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {

  handleCats = () => {
    this.props.handleLinks('cats');
  }

  handleDogs = () => {
    this.props.handleLinks('dogs');
  }

  handleComputers = () => {
    this.props.handleLinks('computers');
  }

  render() {
    return (
      <nav className="main-nav">
         <ul>
           <li><NavLink onClick={this.handleCats} to="/cats">Cats</NavLink></li>

           <li><NavLink onClick={this.handleDogs} to="/dogs">Dogs</NavLink></li>

           <li><NavLink onClick={this.handleComputers} to="/computers">Computers</NavLink></li>
         </ul>
       </nav>
    );
  }
}
