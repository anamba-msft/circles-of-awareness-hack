import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Browse from './Browser';

import home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }

  render() {
    return (
      
      <BrowserRouter>
      <div>

          <Switch>
           <Route path="/" component={home} exact/>
           <Route path="/Browse" component={Browse}/>
          <Route component={Error}/>
         </Switch>
      </div> 
    </BrowserRouter>
    );
  }
}

export default App;
