import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';


export default class Work extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Welcome to my work</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="/">
                Back to Home
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}
