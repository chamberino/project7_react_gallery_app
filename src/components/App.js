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
import URLRender from './URLRender';
import '../App.css';

import apikey from './config.js'

export default class App extends Component {
  constructor() {
    // calling super() allows us to use 'this' keyword in the context of the app class rather than the component class we're extending from react
    super();
    this.state = {
      photos: [],
      loading: true,
    };
  }

  // data fetching
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (search = 'cats') => {
    if(this.state.loading=true) {
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
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.performSearch}/>
          <Nav/>
          <Switch>
            <Route exact path="/" render={ ()=>
            (this.state.loading)
              ? <p>Loading...</p>
              : <Gallery photos={this.state.photos}/>} />

            <Route path="/search/:id" render={ ({match}) =>
            (this.state.loading)
            ? <p>Loading...</p>
            : <URLRender getPhotos={this.performSearch} photos={this.state.photos} match={match}/>} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
