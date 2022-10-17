import React, { useState } from "react";
import SpotList from "./SpotList";
import Spot from './Spot'

function SpotSearch({ allSpots, showSpots, setShowSpots }) {
  const [search, setSearch] = useState('')

  const filterSpots = [...allSpots].filter(spot => spot.city === search)

  const findSpot = [...allSpots].find(spot => spot.city === search)

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
  }

  return (
    <div>
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
      <SpotList spots={showSpots} />
      <Spot />
    </div>
  )
}

export default SpotSearch