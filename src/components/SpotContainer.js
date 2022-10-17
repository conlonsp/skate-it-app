import React from "react";

function SpotContainer({ spot }) {
  return (
    <ul>
      <li>{spot.name}</li>
      <p>{spot.city}, {spot.state}</p>
    </ul>
  )
}

export default SpotContainer