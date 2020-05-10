import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Entertainment from '../components/Entertainment';
import Technology from '../components/Technology';

class App extends Component {
  render () {
    return (
      <div className="app">
        <NavBar />
        <Main />
        <Entertainment />
        <Technology />

      </div>
    )
  }
}

export default App;
