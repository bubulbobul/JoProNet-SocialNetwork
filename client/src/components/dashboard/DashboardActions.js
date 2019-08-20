import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Grid, Segment, Header, Icon } from "semantic-ui-react";

const DashboardActions = () => {
  return (
    <Fragment>
      <Grid columns='equal'>
        <Grid.Column>
          <Link to='/edit-profile'>
            <Segment raised>
              <Header as='h5' color='grey'>
                <Icon name='user circle' color='blue' />
                <Header.Content>Edit Profile</Header.Content>
              </Header>
            </Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to='/add-experience'>
            <Segment raised>
              <Header as='h5' color='grey'>
                <Icon name='file alternate' color='blue' />
                <Header.Content>Add Experience</Header.Content>
              </Header>
            </Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to='/add-education'>
            <Segment raised>
              <Header as='h5' color='grey'>
                <Icon name='graduation cap' color='blue' />
                <Header.Content>Add Education</Header.Content>
              </Header>
            </Segment>
          </Link>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default DashboardActions;
