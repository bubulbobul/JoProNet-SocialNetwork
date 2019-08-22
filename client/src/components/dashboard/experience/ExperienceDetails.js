import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getSingleExperience, deleteExperienceAct } from "../../../actions/profileAct";
import { LoaderExperienceDetails } from "../../../utils/Loader";
import Moment from "react-moment";
import {
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Divider,
  Button,
  Message
} from "semantic-ui-react";

const ExperienceDetails = props => {
  const { apiUrl, profile } = props;

  useEffect(() => {
    props.getSingleExperience(apiUrl, props.match.params.id);
  }, []);

  const handleDelete = (e, id, company) => {
    props.deleteExperienceAct(apiUrl, id, company, props.history, true);
  };

  // console.log(profile)

  return (
    <Fragment>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Segment raised>
          {
            profile === null || profile.experience === null ? (
              <Fragment>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <LoaderExperienceDetails />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
              </Fragment>
            ) :
              (
                <Fragment>
                  <Divider hidden />
                  <Grid>
                    <Grid.Row>
                      <Grid.Column floated='left' width={8}>
                        <Header as='h2'>
                          <Icon name='building' color='blue' />
                          <Header.Content>
                            {profile.experience.company}
                            <Header.Subheader>
                              I {profile.experience.current === true ? " work " : " worked "}
                              for {profile.experience.company} as {profile.experience.title}
                            </Header.Subheader>
                          </Header.Content>
                        </Header>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Header as='h4' floated='right'>
                          My experience with {profile.experience.company}
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <Container textAlign='justified'>
                          <Divider hidden />
                          <Divider />
                          <Header as='h2'>
                            <Icon name='hand paper outline' color='blue' />
                            <Header.Content>What I Did</Header.Content>
                          </Header>
                          <Fragment>
                            {profile.experience.description === "" ? (
                              <Fragment>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Message
                                  warning
                                  header='Warning'
                                  content='You did not add any description of your education'
                                />
                              </Fragment>
                            ) : (
                                <p>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  {profile.experience.description}
                                </p>
                              )}
                          </Fragment>
                        </Container>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                      <Grid.Column width={5}>
                        <Container>
                          <Divider hidden />
                          <Divider />
                          <Header as='h2'>
                            <Icon name='map' color='blue' />
                            <Header.Content>Where ?</Header.Content>
                          </Header>
                          <Header as='h5'>
                            {
                              profile.experience.country && (
                                <Fragment>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong>Country:</strong>&nbsp;&nbsp;{profile.experience.country}
                                  <br />
                                </Fragment>
                              )
                            }
                            {
                              profile.experience.location && (
                                <Fragment>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <strong>Located in:</strong>&nbsp;&nbsp;
                                  {profile.experience.location}
                                </Fragment>
                              )
                            }
                          </Header>
                        </Container>
                      </Grid.Column>
                      <Grid.Column width={5}>
                        <Container>
                          <Divider hidden />
                          <Divider />
                          <Header as='h2'>
                            <Icon name='clock' color='blue' />
                            <Header.Content>When ?</Header.Content>
                          </Header>
                          <Header as='h5'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From&nbsp;:&nbsp;&nbsp;&nbsp;
                      <Moment format='YYYY/MM/DD'>{profile.experience.from}</Moment>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To&nbsp;:&nbsp;&nbsp;&nbsp;
                      {profile.experience.to === null ? (
                              " Now"
                            ) : (
                                <Moment format='YYYY/MM/DD'>{profile.experience.to}</Moment>
                              )}
                          </Header>
                        </Container>
                      </Grid.Column>
                      <Grid.Column width={3} floated='right'>
                        <Divider hidden />
                        <Divider />
                        <Link to='/dashboard'>
                          <Button icon labelPosition='left' floated='right'>
                            Go Back
                      <Icon name='left arrow' />
                          </Button>
                        </Link>
                        <Divider hidden />
                        <Divider hidden />
                        <Divider hidden />
                        <Button
                          icon
                          labelPosition='left'
                          floated='right'
                          color='red'
                          onClick={e =>
                            handleDelete(e, profile.experience._id, profile.experience.company)
                          }
                        >
                          Delete
                    <Icon name='remove circle' />
                        </Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                </Fragment>
              )
          }
        </Segment>
      </Container>
      <Divider hidden />
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  // const id = ownProps.match.params.id;
  // // console.log(id);

  // const experiences = state.profile.experiences;
  // // console.log("experiences", experiences);

  // const experience = experiences ? experiences[id] : null;
  // console.log(experience);

  return {
    apiUrl: state.apiUrl.apiUrl,
    auth: state.auth,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleExperience: (apiUrl, expId) => {
      dispatch(getSingleExperience(apiUrl, expId));
    },
    deleteExperienceAct: (apiUrl, id, company, history, detailPage) => {
      dispatch(deleteExperienceAct(apiUrl, id, company, history, detailPage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExperienceDetails));
