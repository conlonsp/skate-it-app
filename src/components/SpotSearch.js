import React, { useState } from "react";
import SpotList from "./SpotList";
import Spot from './Spot'

function SpotSearch({ allSpots, showSpots, setShowSpots }) {
  const [search, setSearch] = useState('')
  const [selectedSpot, setSelectedSpot] = useState({})

  const filterSpots = [...allSpots].filter(spot => spot.city.toLowerCase() === search.toLowerCase())

  const findSpot = [...allSpots].find(spot => spot.city.toLowerCase() === search.toLowerCase())

  function handleChange(event) {
    setSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(findSpot) {
      setShowSpots(filterSpots)
      setSearch('')
    } else {
      alert(`Spots in ${search} cannot be found`)
    }
    setSelectedSpot({})
  }
  
  return (
    <div>
      <br/>
      <h1 style={{textAlign: 'center'}}>Spot Search</h1>
      <form className='search' onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          name='city'
          value={search}
          placeholder='search area...'
        ></input>
        <button>🔎</button>
      </form>
      <SpotList spots={showSpots} setSelectedSpot={setSelectedSpot} />
      {selectedSpot.id > 0 ? <Spot spot={selectedSpot} /> : null}
    </div>
  )
}

export default SpotSearch