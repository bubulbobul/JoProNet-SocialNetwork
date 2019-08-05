import React, { Fragment } from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, from, to, country, location, description }
}) => {
  return (
    <Fragment>
      <Container textAlign='justified'>
        <Header color='teal'>{company}</Header>
        <p>
          <strong>Position:</strong> {title}
        </p>
        <p>
          <strong>Duration:</strong> <Moment format='YYYY/MM/DD'>{from}</Moment>{" "}
          - {!to ? "Now" : <Moment format='YYYY/MM/DD'>{to}</Moment>}
        </p>

        <Fragment>
          {description && (
            <p>
              <strong>Description:</strong> {description}
            </p>
          )}
        </Fragment>
        <Fragment>
          {country && (
            <Header as='h4'>
              <Icon name='globe' />
              <Header.Content>Country: {country}</Header.Content>
            </Header>
          )}
        </Fragment>
        <Fragment>
          {location && (
            <Header as='h4'>
              <Icon name='map' />
              <Header.Content>Location: {location}</Header.Content>
            </Header>
          )}
        </Fragment>
      </Container>
    </Fragment>
  );
};

export default ProfileExperience;
