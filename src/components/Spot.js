import React from "react";
import {Card, Grid, Image} from 'semantic-ui-react'

function Spot({ spot }) {
  console.log(spot)
  return (
    <Card id='spot-card'>
      <Card.Content>
        <Card.Header>
          {spot.name}
        </Card.Header>
        <Card.Description>
          {spot.street}
          <br/>
          {spot.city}, {spot.state}
        </Card.Description>
        <br/>
        <Image
          src={spot.image}
        />
        <Card.Description>
          {spot.description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Spot