import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileByTheUserIdAct } from "../../../actions/profileAct";
import {
  Container,
  Header,
  Grid,
  Button,
  Segment,
  Icon,
  Message,
  Divider,
  Popup
} from "semantic-ui-react";
import ProfilePlaceholder from "./ProfilePlaceholder";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";
import ProfileContactMe from "./ProfileContactMe";
import NoProfile from "./NoProfile";


const Profile = props => {
  const { match, apiUrl, profile, auth } = props;


  useEffect(() => {
    // console.log("useeffect")
    props.getProfileByTheUserIdAct(apiUrl, match.params.id);
  }, []);

  useEffect(() => {
    return () => {
      console.log('will unmount');
    }
  }, []);

  const goBack = (history) => {
    history.go(-1);
    // history.goBack();
  }

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
          <Segment>
            {profile === null || profile.loading === null || profile.profile === null ? (
              <Fragment>
                <ProfilePlaceholder />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
              </Fragment>
            ) : (

                <Fragment>
                  {
                    profile.profile === "" || profile.profile === null ? (
                      <Fragment>
                        <NoProfile auth={auth} />
                      </Fragment>
                    ) : (
                        <Fragment>
                          <Button icon labelPosition='left' floated='left' onClick={e => goBack(props.history)}>
                            Go Back
                              <Icon name='left arrow' />
                          </Button>
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
                                  <Fragment>
                                    <Grid columns={2}>
                                      <Grid.Row>
                                        <Grid.Column>
                                          <Fragment>
                                            <Header as='h2' color='teal'>
                                              <Icon name='black tie' />
                                              <Header.Content>Experience
                                            </Header.Content>
                                            </Header>
                                          </Fragment>
                                        </Grid.Column>
                                        <Grid.Column>
                                          <Fragment>
                                            {auth.isAuthenticated & (auth.loading === false) &&
                                              auth.user._id === profile.profile.user._id && (
                                                <Link to='/add-experience'>
                                                  <Popup content='Add new experience' trigger={<Button icon='add' floated="right" />} />
                                                </Link>
                                              )}
                                          </Fragment>
                                        </Grid.Column>
                                      </Grid.Row>
                                    </Grid>
                                  </Fragment>
                                  {profile.profile.experience.length > 0 ? (
                                    <Fragment>
                                      {profile.profile.experience.map(exp => (
                                        <Segment key={exp._id} raised>
                                          <ProfileExperience experience={exp} auth={auth} />
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
                                  <Fragment>
                                    <Grid columns={2}>
                                      <Grid.Row>
                                        <Grid.Column>
                                          <Fragment>
                                            <Header as='h2' color='teal'>
                                              <Icon name='graduation cap' />
                                              <Header.Content>Education
                                            </Header.Content>
                                            </Header>
                                          </Fragment>
                                        </Grid.Column>
                                        <Grid.Column>
                                          <Fragment>
                                            {auth.isAuthenticated & (auth.loading === false) &&
                                              auth.user._id === profile.profile.user._id && (
                                                <Link to='/add-education'>
                                                  <Popup content='Add new education' trigger={<Button icon='add' floated="right" />} />
                                                </Link>
                                              )}
                                          </Fragment>
                                        </Grid.Column>
                                      </Grid.Row>
                                    </Grid>
                                  </Fragment>
                                  {profile.profile.education.length > 0 ? (
                                    <Fragment>
                                      {profile.profile.education.map(edu => (
                                        <Segment key={edu._id} raised>
                                          <ProfileEducation education={edu} auth={auth} />
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
                          {
                            (profile.profile.area || profile.profile.country) &&
                            (
                              <Segment raised>
                                <ProfileContactMe
                                  shownumber={profile.profile.shownumber}
                                  showworkingemail={profile.profile.showworkingemail}
                                  workingemail={profile.profile.workingemail}
                                  number={profile.profile.number}
                                  area={profile.profile.area}
                                  country={profile.profile.country}
                                />
                              </Segment>
                            )
                          }
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
                      )
                  }
                </Fragment>


              )}
          </Segment>
        </Container>
      </Fragment>
      <Divider hidden />

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