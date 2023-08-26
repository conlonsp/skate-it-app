import React from "react";

function SpotContainer({ spot, setSelectedSpot }) {

  function handleClick() {
    setSelectedSpot(spot)
  }

  return (
    <ul className='spot-container' onClick={handleClick}>
      <li style={{fontSize: '25px'}}>{spot.name}</li>
      <p style={{fontSize: '20px'}}>{spot.city}, {spot.state}</p>
    </ul>
  )
}

export default SpotContainer