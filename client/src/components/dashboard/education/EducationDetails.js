import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter, Redirect } from "react-router-dom";
import { getCurrentProfileAct } from "../../../actions/profileAct";
import { deleteEducationAct } from "../../../actions/profileAct";
import { LoadingProfile } from "../../../utils/Loader";
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

const EducationDetails = props => {
  const { apiUrl, education } = props;

  useEffect(() => {
    props.getCurrentProfileAct(apiUrl);
  }, []);

  const handleDelete = (e, id, school) => {
    // console.log("Delete button", id, company);
    props.deleteEducationAct(apiUrl, id, school, props.history, true);
  };

  return education === null ||
    education === undefined ||
    education.school === null ||
    education.school === undefined ? (
    <Redirect to='/dashboard' />
  ) : props.profile.loading && props.profile.profile === null ? (
    <LoadingProfile />
  ) : (
    <Fragment>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Segment raised>
          <Grid divided>
            <Grid.Row>
              <Grid.Column floated='left'>
                <Header as='h2'>
                  <Icon name='book' color='blue' />
                  <Header.Content>
                    {education.school}
                    <Header.Subheader>
                      {education.current === true
                        ? `I study in ${education.school}`
                        : `I got my ${education.degree} in ${education.school}`}
                    </Header.Subheader>
                  </Header.Content>
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
                    <Icon name='pencil alternate' color='blue' />
                    <Header.Content>What I Did</Header.Content>
                  </Header>
                  <Fragment>
                    {education.description === "" ? (
                      <Fragment>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Message
                          warning
                          header='Warning'
                          content='You did
                      not add any description of education'
                        />
                      </Fragment>
                    ) : (
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {education.description}
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
                    <Icon name='map marker alternate' color='blue' />
                    <Header.Content>Where ?</Header.Content>
                  </Header>
                  <Header as='h5'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>Country:</strong>&nbsp;&nbsp;{education.country}
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
                    <Moment format='YYYY/MM/DD'>{education.from}</Moment>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To&nbsp;:&nbsp;&nbsp;&nbsp;
                    {education.to === null ? (
                      " Now"
                    ) : (
                      <Moment format='YYYY/MM/DD'>{education.to}</Moment>
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
                    handleDelete(e, education._id, education.school)
                  }
                >
                  Delete
                  <Icon name='remove circle' />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  // console.log(id);

  const educations = state.profile.educations;
  // console.log("educations", educations);

  const education = educations ? educations[id] : null;
  // console.log(experience);

  return {
    apiUrl: state.apiUrl.apiUrl,
    auth: state.auth,
    profile: state.profile,
    education: education
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentProfileAct: apiUrl => {
      dispatch(getCurrentProfileAct(apiUrl));
    },
    deleteEducationAct: (apiUrl, id, school, history, detailPage) => {
      dispatch(deleteEducationAct(apiUrl, id, school, history, detailPage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EducationDetails));
