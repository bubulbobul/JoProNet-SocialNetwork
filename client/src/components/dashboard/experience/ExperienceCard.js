import React, { Fragment } from "react";
import {
  Container,
  Card,
  Header,
  Grid,
  Divider,
  Button,
  Icon,
  Message,
  Popup
} from "semantic-ui-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TextTruncate from "react-text-truncate";
import { deleteExperienceAct } from "../../../actions/profileAct";
import { connect } from "react-redux";

const ExperienceCard = ({ profile, apiUrl, deleteExperienceAct }) => {
  const detailPage = false;

  const handleDelete = (e, id, company) => {
    deleteExperienceAct(apiUrl, id, company, detailPage);
  };

  return (
    <Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column floated='left' width={5}>
            <Header>Experiences</Header>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Header as='h4' floated='right'>
              Current status&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
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
                  profile.experience.map((exp) => {
                    return (
                      <Card
                        key={exp._id}
                        color='blue'
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
                          <Link to={`/add-experience`}>
                            <Popup content='Add a new experience' trigger={<Button circular icon='add' primary />} />
                          </Link>
                          <Popup content='Delete' trigger={<Button circular onClick={e => handleDelete(e, exp._id, exp.company)} color="red" icon='remove' />} />
                          <Link to={`/experience/${exp._id}`}>
                            <Popup content='View details' trigger={<Button circular icon='chevron right' />} />
                          </Link>
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
