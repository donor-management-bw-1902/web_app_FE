import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import './App.css';
import { SignUpView, LoginView, DonorsView, AdminView, CreateDonorView, UpdateDonorView, SingleDonorView, NavbarView } from './views';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <NavbarView history={this.props.history} location={this.props.location}/>
          <div className="container-wrapper">
            <Route exact path = "/" component = {LoginView}/>
            <Route path = "/sign-up" component = {SignUpView} />
            <Route exact path = "/donors" component = {DonorsView} />
            <Route path = "/donors/:id" component = {SingleDonorView} />
            <Route path = "/admin" component = {AdminView} />
            <Route path = "/donor" component = {CreateDonorView} />
            <Route path = "/update/:id" component = {UpdateDonorView} />
          </div>
      </div>
    );
  }
}
export default withRouter(App);
