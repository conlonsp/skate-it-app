import React from 'react'
import SpotContainer from './SpotContainer'

function SpotList({ spots }) {
  return (
    <div>
      <h1>SpotList</h1>
      {spots.map(spot => {
        return (
          <SpotContainer key={spot.id} spot={spot} />
        )
      })}
    </div>
  )
}

export default SpotList