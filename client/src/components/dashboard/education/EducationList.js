import React, { Fragment } from "react";
import {
  Container,
  List,
  Header,
  Grid,
  Divider,
  Button,
  Segment,
  Icon,
  Message
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TextTruncate from "react-text-truncate";
import { deleteEducationAct } from "../../../actions/profileAct";
import { connect } from "react-redux";

const EducationList = props => {
  const { profile, apiUrl } = props;
  const detailPage = false;

  const handleDelete = (e, id, school) => {
    // console.log("Delete button", id);
    props.deleteEducationAct(apiUrl, id, school, detailPage);
  };

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
          {profile.education.length === 0 ? (
            <Message
              warning
              header='Warning'
              content='You did not add education'
            />
          ) : (
            <List>
              {profile &&
                profile.education.map((edu, id) => {
                  return (
                    <Segment key={edu._id}>
                      <List.Item>
                        <List.Content>
                          <Link to={`/education/${id}`}>
                            <Button animated='vertical' floated='right' primary>
                              <Button.Content hidden>More</Button.Content>
                              <Button.Content visible>
                                <Icon name='info circle' />
                              </Button.Content>
                            </Button>
                          </Link>
                          <Button
                            animated='vertical'
                            floated='right'
                            color='red'
                            onClick={e => handleDelete(e, edu._id, edu.school)}
                          >
                            <Button.Content hidden>Delete</Button.Content>
                            <Button.Content visible>
                              <Icon name='remove circle' />
                            </Button.Content>
                          </Button>
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
    deleteEducationAct: (apiUrl, id, school, detailPage) => {
      dispatch(deleteEducationAct(apiUrl, id, school, detailPage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationList);
