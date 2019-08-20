import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfileAct } from "../../actions/profileAct";
import { deleteAccountAct } from "../../actions/profileAct";
import { MainLoader } from "../../utils/Loader";
import { Link } from "react-router-dom";

import {
  Container,
  Grid,
  Segment,
  Header,
  Icon,
  Divider,
  Button
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import DashboardActions from "./DashboardActions";
import ExperienceCard from "./experience/ExperienceCard";
import EducationList from "./education/EducationList";

const Dashboard = props => {
  const { apiUrl, auth, profile } = props;

  useEffect(function getCurrentProfil() {
    // 👍 We're not breaking the first rule anymore
    if (apiUrl) {
      props.getCurrentProfileAct(apiUrl);
    }
  }, []);

  const handeDeleteAccount = e => {
    props.deleteAccountAct(apiUrl);
  };

  return profile.profile === null ? (
    <MainLoader />
  ) : (
    <Fragment>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Segment raised>
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
                  Welcome {auth.user && auth.user.name.toUpperCase()}
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={10} />
          </Grid>
          <Fragment>
            {profile.hasProfile !== null ? (
              <Fragment>
                <Fragment>
                  {profile.hasProfile === true && <DashboardActions />}
                </Fragment>
                <Divider hidden />
                <Divider hidden />
                <Divider />
                <Divider hidden />
                <Divider hidden />
                <Fragment>
                  <Segment raised>
                    <ExperienceCard profile={props.profile.profile} />
                  </Segment>
                </Fragment>
                <Divider hidden />
                <Divider hidden />
                <Divider />
                <Divider hidden />
                <Divider hidden />
                <Fragment>
                  <Segment raised>
                    <EducationList profile={props.profile.profile} />
                  </Segment>
                </Fragment>
              </Fragment>
            ) : (
              <Fragment>
                <Grid columns='equal'>
                  <Grid.Column>
                    {" "}
                    <p>
                      You have not yet setup a profile, please add some info
                    </p>
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
          <Fragment>
            <Grid columns='equal'>
              <Grid.Column />
              <Grid.Column />
              <Grid.Column textAlign='right'>
                <Fragment>
                  <Segment
                    as={Link}
                    to='/'
                    onClick={handeDeleteAccount}
                    color='red'
                    style={{
                      textDecoration: "none",
                      color: "white",
                      background: "#db2828"
                    }}
                  >
                    Delete my account
                  </Segment>
                </Fragment>
              </Grid.Column>
            </Grid>
          </Fragment>
          <Divider hidden />
          <Divider hidden />
        </Segment>
      </Container>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
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
  auth: state.auth,
  profile: state.profile
});

const mapDispatchToProps = dispatch => {
  return {
    getCurrentProfileAct: apiUrl => {
      dispatch(getCurrentProfileAct(apiUrl));
    },
    deleteAccountAct: apiUrl => {
      dispatch(deleteAccountAct(apiUrl));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
