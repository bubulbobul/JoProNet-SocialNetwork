import React, { Fragment } from "react";
import { Container, Header, Icon, Button, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { _id, company, title, from, to, country, location, description }, auth, profile
}) => {
  return (
    <Fragment>
      <Container textAlign='justified'>
        {profile !== "" && auth.isAuthenticated && (auth.loading === false) &&
          auth.user._id === profile.profile.user._id && (
            <Fragment>
              <Link to={`/experience/${_id}`}>
                <Popup content={`View or Edit ${company} experience`} trigger={<Button circular icon='edit' floated="right" color="yellow" />} />
              </Link>
            </Fragment>
          )}
        <Header color='teal' style={{ marginTop: "0" }}>{company}</Header>
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
