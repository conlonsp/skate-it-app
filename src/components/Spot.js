import React from "react";

function Spot({ spot }) {
  return (
    <ul>
      <li>{spot.name}</li>
      <p>{spot.city}, {spot.state}</p>
    </ul>
  )
}

export default Spot