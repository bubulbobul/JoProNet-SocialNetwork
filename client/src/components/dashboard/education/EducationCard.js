import React, { Fragment } from "react";
import {
  Container,
  List,
  Header,
  Grid,
  Divider,
  Button,
  Segment,
  Icon
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TextTruncate from "react-text-truncate";

const EducationCard = ({ profile }) => {
  return (
    <Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column floated='left' width={5}>
            <Header>Education</Header>
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
          <List>
            {profile &&
              profile.education.map((edu, id) => {
                return (
                  <Segment key={edu._id}>
                    <List.Item>
                      <List.Content>
                        <Link to={`/education/${id}`}>
                          <Button floated='right' primary>
                            More
                          </Button>
                        </Link>
                      </List.Content>
                      <Header style={{ marginTop: "1%" }}>
                        <Icon name='graduation cap' />
                        <Header.Content>
                          {edu.fieldofstudy}
                          <Header.Subheader>{edu.degree}</Header.Subheader>
                        </Header.Content>
                      </Header>
                      <List.Content>
                        <List.Description>
                          <Fragment>
                            <TextTruncate
                              line={3}
                              element='span'
                              truncateText='…'
                              text={
                                edu.description === ""
                                  ? `No description`
                                  : edu.description
                              }
                            />
                          </Fragment>
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </Segment>
                );
              })}
          </List>
        </Fragment>
      </Container>
    </Fragment>
  );
};

export default EducationCard;
