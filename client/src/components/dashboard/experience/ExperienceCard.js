import React, { Fragment } from "react";
import {
  Container,
  Card,
  Header,
  Grid,
  Divider,
  Button,
  Icon,
  Message
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TextTruncate from "react-text-truncate";
import { deleteExperienceAct } from "../../../actions/profileAct";
import { connect } from "react-redux";

const ExperienceCard = props => {
  const { profile, apiUrl } = props;
  // console.log("apiUrl", apiUrl);
  const detailPage = false;

  const handleDelete = (e, id, company) => {
    // console.log("Delete button", id, company);
    props.deleteExperienceAct(apiUrl, id, company, detailPage);
  };

  // console.log(profile.experience);
  return (
    <Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column floated='left' width={5}>
            <Header>Experiences</Header>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Header as='h4' floated='right'>
              My current status&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
              {profile.status.toUpperCase()}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider hidden />
      <Container>
        <Fragment>
          {profile.experience.length === 0 ? (
            <Message
              warning
              header='Warning'
              content="You don't have experience"
            />
          ) : (
            <Card.Group itemsPerRow={4}>
              {profile &&
                profile.experience.map((exp, id) => {
                  return (
                    <Card
                      key={exp._id}
                      color='blue'
                      // style={{ background: "blue" }}
                    >
                      <Card.Content>
                        <Card.Header>{exp.company}</Card.Header>
                        <Card.Meta>{exp.title}</Card.Meta>
                      </Card.Content>
                      <Card.Content>
                        <Card.Description>
                          <Fragment>
                            <TextTruncate
                              line={3}
                              element='span'
                              truncateText='…'
                              text={
                                exp.description === ""
                                  ? `No description`
                                  : exp.description
                              }
                            />
                          </Fragment>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Link to={`/experience/${id}`}>
                          <Button animated='vertical' primary floated='right'>
                            <Button.Content visible>More</Button.Content>
                            <Button.Content hidden>
                              <Icon name='info circle' />
                            </Button.Content>
                          </Button>
                        </Link>
                        <Button
                          animated='vertical'
                          color='red'
                          floated='right'
                          onClick={e => handleDelete(e, exp._id, exp.company)}
                        >
                          <Button.Content visible>Delete</Button.Content>
                          <Button.Content hidden>
                            <Icon name='remove circle' />
                          </Button.Content>
                        </Button>
                      </Card.Content>
                    </Card>
                  );
                })}
            </Card.Group>
          )}
        </Fragment>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl
});

const mapDispatchToProps = dispatch => {
  return {
    deleteExperienceAct: (apiUrl, id, company, detailPage) => {
      dispatch(deleteExperienceAct(apiUrl, id, company, detailPage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceCard);
