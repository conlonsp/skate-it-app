import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home'
import About from './About';
import SpotSearch from './SpotSearch'
import AddSpot from './AddSpot';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
