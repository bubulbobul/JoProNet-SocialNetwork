import React, { Fragment } from "react";
import {
  Container,
  List,
  Header,
  Grid,
  Button,
  Segment,
  Icon,
  Image,
  Popup
} from "semantic-ui-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import Highlighter from "react-highlight-words";

const ProfileList = ({ profile, searchWordItem }) => {

  // console.log(profile.AllProfiles.length)
  // console.log(searchWordItem)
  return (
    <Fragment>
      {profile && (
        <Segment raised style={{ backgroundColor: "#f4f4f4" }}>
          <Grid>
            <Grid.Column width={3} textAlign='right'>
              <Image src={profile.user.avatar} size='small' circular />
            </Grid.Column>
            <Grid.Column width={7}>
              <Container>
                <Header as='h2'>
                  {
                    searchWordItem !== undefined ? (
                      <Link to={`/profile/${profile.user._id}`}>
                        <p style={{ color: "black" }}>
                          <Highlighter
                            highlightClassName="YourHighlightClass"
                            highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
                            searchWords={searchWordItem.split()}
                            autoEscape={true}
                            textToHighlight={profile.user.name.toUpperCase()}
                          /></p></Link>) :
                      (<Fragment>
                        <Link to={`/profile/${profile.user._id}`}>
                          <p style={{ color: "black" }}>{profile.user.name.toUpperCase()}</p></Link>
                      </Fragment>)
                  }
                </Header>
                <Fragment>
                  {
                    searchWordItem !== undefined ? (
                      <p style={{ color: "#333", fontSize: "1.3rem" }}>
                        <br />
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
                          searchWords={searchWordItem.split()}
                          autoEscape={true}
                          textToHighlight={profile.status}
                        />{" "}
                        <Fragment>
                          {
                            profile.company && (
                              <Fragment>
                                at{" "}<Highlighter
                                  highlightClassName="YourHighlightClass"
                                  highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
                                  searchWords={searchWordItem.split()}
                                  autoEscape={true}
                                  textToHighlight={profile.company}
                                />
                              </Fragment>
                            )
                          }
                        </Fragment><br />
                        <Fragment>
                          {
                            profile.location && (
                              <Fragment>
                                in{" "}<Highlighter
                                  highlightClassName="YourHighlightClass"
                                  highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
                                  searchWords={searchWordItem.split()}
                                  autoEscape={true}
                                  textToHighlight={profile.location}
                                />
                              </Fragment>
                            )
                          }
                        </Fragment>
                      </p>
                    ) : (
                        <p style={{ color: "#333", fontSize: "1.3rem" }}>
                          {profile.status}{" "}
                          <Fragment>
                            {
                              profile.company && (
                                <Fragment>
                                  at{" "}{profile.company}
                                </Fragment>
                              )
                            }
                          </Fragment>
                          <br />
                          <Fragment>
                            {
                              profile.location && (
                                <Fragment>
                                  in{" "}{profile.location}
                                </Fragment>
                              )
                            }
                          </Fragment>
                        </p>
                      )
                  }
                </Fragment>
                <Link to={`/profile/${profile.user._id}`}>
                  <Popup content={`${profile.user.name}'s profile`} trigger={
                    <Button style={{ borderRadius: "50px" }} primary>View Profile</Button>
                  } />
                </Link>
              </Container>
            </Grid.Column>
            <Grid.Column width={5}>
              <List>
                {profile.skills.slice(0, 5).map((skill, id) => (
                  <List.Item key={id}>
                    {
                      searchWordItem !== undefined ? (
                        <Fragment>
                          <p style={{ color: "#333", fontSize: "1.3rem" }}>
                            <Icon name='checkmark' />
                            <Highlighter
                              highlightClassName="YourHighlightClass"
                              highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
                              searchWords={searchWordItem.split()}
                              autoEscape={true}
                              textToHighlight={skill}
                            />
                          </p>
                        </Fragment>
                      ) : (
                          <p style={{ color: "#333", fontSize: "1.3rem" }}>
                            <Icon name='checkmark' />
                            {skill}
                          </p>
                        )
                    }
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
          </Grid>
        </Segment>
      )}
    </Fragment>
  );
};

ProfileList.propTypes = {};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl
});

export default connect(mapStateToProps)(ProfileList);
