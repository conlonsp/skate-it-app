import React from "react";
import {Card, Grid, Image} from 'semantic-ui-react'

function Spot({ spot }) {
  console.log(spot)
  return (
    <Grid id='spot-grid'>
      {/* <Grid.Column>
        <Image
          src={spot.image}
          floated="left"
          
          className="spotImg"
        />
      </Grid.Column> */}
      <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>
              {spot.name}
            </Card.Header>
            <Card.Description>
              {spot.street}
              <br/>
              {spot.city}, {spot.state}
            </Card.Description>
            <Image
              src={spot.image}
              floated='left'
              size='medium'
              //className='spotImg'
            />
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