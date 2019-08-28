import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Icon, Popup, Button } from "semantic-ui-react";
import Moment from "react-moment";

const ProfileEducation = ({
  education: {
    _id,
    school,
    degree,
    fieldofstudy,
    from,
    to,
    country,
    location,
    description
  }, profile, auth
}) => {
  return (
    <Fragment>
      <Container textAlign='justified'>
        {profile !== "" && auth.isAuthenticated && (auth.loading === false) &&
          auth.user._id === profile.profile.user._id && (
            <Fragment>
              <Link to={`/education/${_id}`}>
                <Popup content={`View or Edit ${school} education`} trigger={<Button circular icon='edit' floated="right" color="yellow" />} />
              </Link>
            </Fragment>
          )}
        <Header color='teal' style={{ marginTop: "0" }}>{school}</Header>
        <p>
          <strong>Degre:</strong> {degree}
        </p>
        <p>
          <strong>Duration:</strong> <Moment format='YYYY/MM/DD'>{from}</Moment>{" "}
          - {!to ? "Now" : <Moment format='YYYY/MM/DD'>{to}</Moment>}
        </p>
        <p>
          <strong>Field of study:</strong> {fieldofstudy}
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

export default ProfileEducation;
