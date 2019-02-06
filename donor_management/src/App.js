import React, { Component } from 'react';
import { Route } from "react-router-dom";

import './App.css';
import { SignUpView, LoginView, DonorsView, AdminView, CreateDonorView } from './views';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path = "/" component = {LoginView}/>
        <Route path = "/sign-up" component = {SignUpView} />
        <Route path = "/donors" component = {DonorsView} />
        <Route path = "/admin" component = {AdminView} />
        <Route path = "/donor" component = {CreateDonorView} />
      </div>
    );
  }
}
export default App;
