import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoaderProfile } from "../../../utils/Loader";
import { getProfileByTheUserIdAct } from "../../../actions/profileAct";
import {
  Container,
  Header,
  Grid,
  Button,
  Segment,
  Icon,
  Message,
  Divider
} from "semantic-ui-react";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";

const Profile = props => {
  const { match, apiUrl, profile, auth } = props;

  useEffect(() => {
    props.getProfileByTheUserIdAct(apiUrl, match.params.id);
  }, []);

  return (
    <Fragment>
      <Fragment>
        <Container>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Segment>
            {profile === null || profile.loading || profile.profile === null ? (
              <Fragment>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <LoaderProfile />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
              </Fragment>
            ) : (
                <Fragment>
                  <Link to='/profiles'>
                    <Button icon labelPosition='left' floated='left'>
                      Go Back Pofiles
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
                          Edit My Profile <Icon name='edit' />
                        </Button>
                      </Link>
                    )}
                  <Divider hidden />
                  <Divider hidden />
                  <Fragment>
                    <ProfileTop profile={profile.profile} />
                  </Fragment>
                  <Fragment>
                    <ProfileAbout profile={profile.profile} />
                  </Fragment>
                  <Fragment>
                    <Grid colomn={2}>
                      <Grid.Column width={8}>
                        <Segment>
                          <Header as='h2' color='teal'>
                            <Icon
                              name='black tie'
                              color='teal'
                              style={{ color: "teal" }}
                            />
                            <Header.Content>Experience</Header.Content>
                          </Header>
                          {profile.profile.experience.length > 0 ? (
                            <Fragment>
                              {profile.profile.experience.map(exp => (
                                <Segment key={exp._id} raised>
                                  <ProfileExperience experience={exp} />
                                </Segment>
                              ))}
                            </Fragment>
                          ) : (
                              <Segment>
                                <Message warning>
                                  <Message.Header>
                                    No experience credentials
                              </Message.Header>
                                </Message>
                              </Segment>
                            )}
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Segment>
                          <Header as='h2' color='teal'>
                            <Icon name='graduation cap' />
                            <Header.Content>Education</Header.Content>
                          </Header>
                          {profile.profile.education.length > 0 ? (
                            <Fragment>
                              {profile.profile.education.map(edu => (
                                <Segment key={edu._id} raised>
                                  <ProfileEducation education={edu} />
                                </Segment>
                              ))}
                            </Fragment>
                          ) : (
                              <Segment>
                                <Message warning>
                                  <Message.Header>
                                    No education credentials
                              </Message.Header>
                                </Message>
                              </Segment>
                            )}
                        </Segment>
                      </Grid.Column>
                    </Grid>
                  </Fragment>
                  <Fragment>
                    {profile.profile.githubusername && (
                      <Segment>
                        <Fragment>
                          <Header as='h2' color='teal'>
                            <Icon name='github' />
                            <Header.Content>Github Repos</Header.Content>
                          </Header>

                          <ProfileGithub
                            username={profile.profile.githubusername}
                          />
                        </Fragment>
                      </Segment>
                    )}
                  </Fragment>
                </Fragment>
              )}
          </Segment>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
        </Container>
      </Fragment>
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

// <Segment loading>
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//               <Divider hidden />
//             </Segment>
