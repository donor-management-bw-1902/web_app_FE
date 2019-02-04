import React, { Component } from 'react';

import './App.css';
import LoginView from './views/LoginView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginView />
      </div>
    );
  }
}

export default App;
