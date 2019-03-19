import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Nav from './Nav';
import Search from './Search';
import Gallery from './Gallery';
import NotFound from './NotFound';

import '../App.css';

import apikey from './config.js'

// const Child = (props) =>
//   console.log(props.props.match) || (
//   <div>
//     <h3>ID: </h3>
//   </div>
// )

export default class App extends Component {
  constructor() {
    // calling super() allows us to use 'this' keyword in the context of the app class rather than the component class we're extending from react
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  // data fetching
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (search = 'cats') => {
    axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.performSearch}/>
          <Nav handleLinks={this.performSearch}/>
          <Switch>
            <Route exact path="/" render={ ()=>
            (this.state.loading)
              ? <p>Loading...</p>
              : <Gallery photos={this.state.photos}/>} />

            <Route path="/cats" render={ ()=>
            (this.state.loading)
              ? <p>Loading...</p>
              : <Gallery photos={this.state.photos}/>} />

            <Route path="/dogs" render={ (props)=> <Gallery props={props} photos={this.state.photos}/>} />

            <Route path="/computers" render={ (props)=> <Gallery props={props} photos={this.state.photos}/>} />


            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
