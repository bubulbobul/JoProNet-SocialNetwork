import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoadingProfile } from "../../../utils/Loader";
import { getProfileByTheUserIdAct } from "../../../actions/profileAct";
import {
  Container,
  List,
  Header,
  Grid,
  Button,
  Segment,
  Icon,
  Image,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ProfileTop from "./ProfileTop";

const Profile = props => {
  const { match, apiUrl, profile, auth } = props;
  // console.log(apiUrl, match);

  useEffect(() => {
    console.log("useEffect");
    props.getProfileByTheUserIdAct(apiUrl, match.params.id);
  }, []);
  console.log(profile);
  console.log(profile.loading);
  // console.log(singleProfile.user);
  console.log(auth);
  console.log(auth.isAuthenticated);
  console.log(auth.loading);

  return (
    <Fragment>
      {profile === null || profile.loading || profile.profile === null ? (
        <LoadingProfile />
      ) : (
        <Fragment>
          <Container>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Segment>
              <Fragment>
                <Link to='/profiles'>
                  <Button icon labelPosition='left' floated='left'>
                    Go Back
                    <Icon name='left arrow' />
                  </Button>
                </Link>
                {auth.isAuthenticated & (auth.loading === false) &&
                  auth.user._id === profile.profile.user._id && (
                    <Link to='/edit-profile'>
                      <Button
                        icon
                        labelPosition='left'
                        floated='right'
                        secondary
                      >
                        Edit Profile
                        <Icon name='edit' />
                      </Button>
                    </Link>
                  )}
                <Divider hidden />
                <Divider hidden />

                <Fragment>
                  <ProfileTop profile={profile.profile} />
                </Fragment>
              </Fragment>
            </Segment>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  profile: state.profile,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    getProfileByTheUserIdAct: (apiUrl, userId) => {
      dispatch(getProfileByTheUserIdAct(apiUrl, userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
