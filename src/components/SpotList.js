import React from 'react'
import SpotContainer from './SpotContainer'

function SpotList({ spots, setSelectedSpot }) {
  return (
    <div>
      <h1>SpotList</h1>
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