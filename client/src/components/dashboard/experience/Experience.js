import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Button, Grid, Segment, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Experience = ({ experience }) => {
  return (
    <Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column floated='left' width={5}>
            <Header>{experience.company}</Header>
            <Header>{experience.title}</Header>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h5' floated='right'>
              From&nbsp;:&nbsp;&nbsp;&nbsp;
              <Moment format='YYYY/MM/DD'>{experience.from}</Moment>
              <br />
              To&nbsp;:&nbsp;&nbsp;&nbsp;
              {experience.to === null ? (
                " Now"
              ) : (
                <Moment format='YYYY/MM/DD'>{experience.to}</Moment>
              )}
            </Header>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Link to={`/experience/${experience._id}`}>
              <Button>More</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

Experience.propTypes = {};

export default Experience;
