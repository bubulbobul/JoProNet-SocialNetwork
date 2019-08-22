import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter, Redirect } from "react-router-dom";
import { getSingleEducation, deleteEducationAct } from "../../../actions/profileAct";
import { LoaderEducationDetails } from "../../../utils/Loader";
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
  const { apiUrl, profile } = props;

  useEffect(() => {
    props.getSingleEducation(apiUrl, props.match.params.id);
  }, []);

  const handleDelete = (e, id, school) => {
    props.deleteEducationAct(apiUrl, id, school, props.history, true);
  };

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
              profile === null || profile.education === null ? (
                <Fragment>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <LoaderEducationDetails />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                </Fragment>
              ) :
                (
                  <Fragment>
<Grid divided>
            <Grid.Row>
              <Grid.Column floated='left' width={8}>
                <Header as='h2'>
                  <Icon name='book' color='blue' />
                  <Header.Content>
                    {profile.education.school}
                    <Header.Subheader>
                      {profile.education.current === true
                        ? `I study in ${profile.education.school}`
                        : `I got my ${profile.education.degree} in ${profile.education.school}`}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h4' floated='right'>
                  My education with {profile.education.school}
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
                    {profile.education.description === "" ? (
                      <Fragment>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Message
                          warning
                          header='Warning'
                          content='You did
                      not add any description of your education'
                        />
                      </Fragment>
                    ) : (
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {profile.education.description}
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
                    <strong>Country:</strong>&nbsp;&nbsp;{profile.education.country}
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
                    <Moment format='YYYY/MM/DD'>{profile.education.from}</Moment>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To&nbsp;:&nbsp;&nbsp;&nbsp;
                    {profile.education.to === null ? (
                      " Now"
                    ) : (
                      <Moment format='YYYY/MM/DD'>{profile.education.to}</Moment>
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
                    handleDelete(e, profile.education._id, profile.education.school)
                  }
                >
                  Delete
                  <Icon name='remove circle' />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
                  </Fragment>
                )
          }
          
        </Segment>
      </Container>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    apiUrl: state.apiUrl.apiUrl,
    auth: state.auth,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleEducation: (apiUrl, eduId) => {
      dispatch(getSingleEducation(apiUrl, eduId));
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
