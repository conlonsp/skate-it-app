import React from "react";

function SpotContainer({ spot, setSelectedSpot }) {

  function handleClick() {
    setSelectedSpot(spot)
  }

  return (
    <ul onClick={handleClick}>
      <li>{spot.name}</li>
      <p>{spot.city}, {spot.state}</p>
    </ul>
  )
}

export default SpotContainer