import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MainLoader } from "../../utils/Loader";
import { getAllProfilesAct } from "../../actions/profileAct";
import {
  Container,
  Segment,
  Divider,
  Header,
  Grid,
  Icon
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ProfileList from "./ProfileList";

const AllProfiles = props => {
  const { apiUrl, profile } = props;

  useEffect(() => {
    props.getAllProfilesAct(apiUrl);
  }, []);

  return (
    <Fragment>
      {profile.loading || profile.allProfiles.length === 0 ? (
        <MainLoader />
      ) : (
        <Fragment>
          <Container>
            <Segment color='blue'>
              <Fragment>
                <Grid columns='equal'>
                  <Grid.Column>
                    <Header as='h1' color='blue'>
                      Our Community
                    </Header>
                  </Grid.Column>
                </Grid>
                <Grid columns='equal'>
                  <Grid.Column>
                    <Header as='h3'>
                      <Icon name='connectdevelop' />
                      <Header.Content>
                        Browse and connect with our members
                      </Header.Content>
                    </Header>
                  </Grid.Column>
                </Grid>
              </Fragment>
              <Divider hidden />
              <Segment>
                <Fragment>
                  {profile.allProfiles.length > 0 ? (
                    profile.allProfiles.map(profile => (
                      <ProfileList key={profile._id} profile={profile} />
                    ))
                  ) : (
                    <Header size='huge'>No profiles found...</Header>
                  )}
                </Fragment>
              </Segment>
            </Segment>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

AllProfiles.propTypes = {
  getAllProfilesAct: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  profile: state.profile
});

const mapDispatchToProps = dispatch => {
  return {
    getAllProfilesAct: apiUrl => {
      dispatch(getAllProfilesAct(apiUrl));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProfiles);
