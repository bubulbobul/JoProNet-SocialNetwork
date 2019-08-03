import React, { Fragment } from "react";
import {
  Container,
  Card,
  Header,
  Grid,
  Divider,
  Button
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TextTruncate from "react-text-truncate";

const ExperienceCard = ({ profile }) => {
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
          <Card.Group itemsPerRow={4} centered>
            {profile &&
              profile.experience.map((exp, id) => {
                return (
                  <Card key={exp._id} color='blue'>
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
                        <Button floated='right' primary>
                          More
                        </Button>
                      </Link>
                    </Card.Content>
                  </Card>
                );
              })}
          </Card.Group>
        </Fragment>
      </Container>
    </Fragment>
  );
};

export default ExperienceCard;
