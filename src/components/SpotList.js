import React from 'react'
import SpotContainer from './SpotContainer'

function SpotList({ spots, setSelectedSpot }) {
  return (
    <div>
      <br/>
      <h1 style={{textAlign: 'center'}}>List of Spots</h1>
      {spots.map(spot => {
        return (
          <SpotContainer
            key={spot.id}
            spot={spot}
            setSelectedSpot={setSelectedSpot}
          />
        )
      })}
    </div>
  )
}

export default SpotList