import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {

  // Originally these functions were fired for each link when clicked. I decided to handle the search by using the url parameters to make the code more flexible. 

  // handleCats = () => {
  //   this.props.handleLinks('cats');
  // }
  //
  // handleDogs = () => {
  //   this.props.handleLinks('dogs');
  // }
  //
  // handleComputers = () => {
  //   this.props.handleLinks('computers');
  // }

  render() {
    return (
      <nav className="main-nav">
         <ul>
           <li><NavLink to="/search/cats">Cats</NavLink></li>

           <li><NavLink to="/search/dogs">Dogs</NavLink></li>

           <li><NavLink to="/search/computers">Computers</NavLink></li>
         </ul>
       </nav>
    );
  }
}
