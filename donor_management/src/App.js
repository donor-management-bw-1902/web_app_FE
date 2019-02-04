import React, { Component } from 'react';
import { Route } from "react-router-dom";

import './App.css';
import { SignUpView, LoginView } from './views';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path = "/" component = {LoginView}/>
        <Route path = "/Sign-up" component = {SignUpView} />
      </div>
    );
  }
}

export default App;
