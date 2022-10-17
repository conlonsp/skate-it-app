import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home'
import About from './About';
import SpotSearch from './SpotSearch'
import AddSpot from './AddSpot';

function App() {
  const [allSpots, setAllSpots] = useState([])
  const [showSpots, setShowSpots] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/spots')
    .then(r => r.json())
    .then(data => setAllSpots(data))
  }, [setShowSpots])

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>skate it.</h1>
      <NavBar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/search'>
          <SpotSearch allSpots={allSpots} showSpots={showSpots} setShowSpots={setShowSpots} />
        </Route>
        <Route path='/add'>
          <AddSpot allSpots={allSpots} setAllSpots={setAllSpots}/>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
