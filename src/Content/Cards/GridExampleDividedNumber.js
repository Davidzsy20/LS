import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './GridExampleDividedNumber.css'
import {Link} from 'react-router-dom';
const GridExampleDividedNumber = () => (
  <Grid>
    <Grid.Row columns={3} divided>
      <Grid.Column>
      <Link to="/#">
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
      </Grid.Column>

    </Grid.Row>

  <Grid.Row columns={4} divided>
      <Grid.Column width='10'>
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='http://semantic-ui.com/images/avatar2/large/kristy.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleDividedNumber