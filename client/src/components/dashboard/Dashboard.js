import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfileAct } from "../../actions/profileAct";
import { LoadingProfile } from "../../utils/Loader";
import { Link } from "react-router-dom";

import {
  Container,
  Grid,
  Segment,
  Header,
  Icon,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import DashboardActions from "./DashboardActions";
import Experience from "./experience/Experience";

const Dashboard = props => {
  const { apiUrl, auth, profile } = props;

  useEffect(function getCurrentProfil() {
    // 👍 We're not breaking the first rule anymore
    if (apiUrl) {
      props.getCurrentProfileAct(apiUrl);
    }
  }, []);

  return profile.loading && profile.profile === null ? (
    <LoadingProfile />
  ) : (
    <Fragment>
      <Container style={{ marginTop: "50px" }}>
        <Grid columns='equal'>
          <Grid.Column>
            <Header as='h1' color='blue'>
              Dashboard
            </Header>
          </Grid.Column>
          <Grid.Column width={12} />
        </Grid>
        <Grid columns='equal'>
          <Grid.Column>
            <Header as='h3'>
              <Icon name='user' />
              <Header.Content>
                Welcome {auth.user && auth.user.name}
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column width={10} />
        </Grid>
        <Fragment>
          {profile.hasProfile !== null ? (
            <Fragment>
              {profile.hasProfile === true && <DashboardActions />}
            </Fragment>
          ) : (
            <Fragment>
              <Grid columns='equal'>
                <Grid.Column>
                  {" "}
                  <p>You have not yet setup a profile, please add some info</p>
                </Grid.Column>
              </Grid>{" "}
              <Grid columns='equal'>
                <Grid.Column>
                  <Link to='/create-profile'>
                    <Segment raised>
                      <Header as='h5' color='grey'>
                        <Icon name='user plus' color='blue' />
                        <Header.Content>Create Profile</Header.Content>
                      </Header>
                    </Segment>
                  </Link>
                </Grid.Column>
                <Grid.Column />
                <Grid.Column />
              </Grid>
            </Fragment>
          )}
        </Fragment>
        <Divider hidden />
        <Divider hidden />
        <Divider />

        <Divider hidden />
        <Fragment>
          <Segment raised>
            <Experience />
          </Segment>
        </Fragment>
      </Container>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfileAct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  alerts: state.alert,
  auth: state.auth,
  profile: state.profile
});

const mapDispatchToProps = dispatch => {
  return {
    getCurrentProfileAct: apiUrl => {
      dispatch(getCurrentProfileAct(apiUrl));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
