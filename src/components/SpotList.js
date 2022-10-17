import React from 'react'
import Spot from './Spot'

function SpotList({ spots }) {
  return (
    <div>
      <h1>SpotList</h1>
      {spots.map(spot => {
        return (
          <Spot key={spot.id} spot={spot} />
        )
      })}
    </div>
  )
}

export default SpotList