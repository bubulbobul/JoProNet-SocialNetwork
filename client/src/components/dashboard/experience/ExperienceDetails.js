import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfileAct } from "../../../actions/profileAct";
import { LoadingProfile } from "../../../utils/Loader";
import Moment from "react-moment";
import {
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Divider,
  Button
} from "semantic-ui-react";

const ExperienceDetails = props => {
  const { apiUrl, experience } = props;

  useEffect(() => {
    props.getCurrentProfileAct(apiUrl);
  }, []);

  return props.profile.loading && props.profile.profile === null ? (
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
                  <Icon name='building' color='blue' />
                  <Header.Content>
                    {experience.company}
                    <Header.Subheader>
                      I have worked for {experience.company} as{" "}
                      {experience.title}
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
                    <Icon name='hand paper outline' color='blue' />
                    <Header.Content>What I Did</Header.Content>
                  </Header>
                  <Fragment>
                    {experience.description === "" ? (
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You did
                        not add any description
                      </p>
                    ) : (
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {experience.description}
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>Country:</strong>&nbsp;&nbsp;{experience.country}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>Located in:</strong>&nbsp;&nbsp;
                    {experience.location}
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
                    <Moment format='YYYY/MM/DD'>{experience.from}</Moment>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To&nbsp;:&nbsp;&nbsp;&nbsp;
                    {experience.to === null ? (
                      " Now"
                    ) : (
                      <Moment format='YYYY/MM/DD'>{experience.to}</Moment>
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

  const experiences = state.profile.experiences;
  // console.log("experiences", experiences);

  const experience = experiences ? experiences[id] : null;
  // console.log(experience);

  return {
    apiUrl: state.apiUrl.apiUrl,
    auth: state.auth,
    profile: state.profile,
    experience: experience
  };
};

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
)(ExperienceDetails);
