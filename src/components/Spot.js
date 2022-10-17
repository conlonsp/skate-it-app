import React from "react";
import {Card, Grid, Image} from 'semantic-ui-react'

function Spot({ spot }) {
  console.log(spot)
  return (
    <Grid id='spot-grid'>
      <Grid.Column>
        <Image
          src={spot.image}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>
              {spot.name}
            </Card.Header>
            <Card.Description>
              {spot.city}, {spot.state}
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
    // <Card id='spot-card'>
    //   hello!
    // </Card>
  )
}

export default Spot