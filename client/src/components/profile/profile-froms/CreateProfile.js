import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfileAct } from "../../../actions/profileAct";

import {
  Button,
  Form,
  Container,
  Grid,
  Header,
  Icon,
  TextArea,
  Segment,
  Divider,
  Label,
  Dropdown,
  Message
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    company: "",
    status: "",
    website: "",
    location: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const { apiUrl, auth, alerts } = props;
  const icon = "black tie";

  const {
    company,
    website,
    location,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;
  const statusOptions = [
    { key: "0", text: "Developer", value: "Developer" },
    { key: "1", text: "Junior Developer", value: "Junior Developer" },
    { key: "2", text: "Senior Developer", value: "Senior Developer" },
    { key: "3", text: "Manager", value: "Manager" },
    { key: "4", text: "Student or Learning", value: "Student or Learning" },
    { key: "5", text: "Instructor", value: "Instructor" },
    { key: "6", text: "Intern", value: "Intern" },
    { key: "7", text: "Other", value: "Other" }
  ];

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    console.log(formData);
    e.preventDefault();
    props.createProfileAct(apiUrl, formData, props.history);
  };

  return (
    <Fragment>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Segment color='blue'>
          <Grid columns='equal'>
            <Grid.Column>
              <Header as='h1' color='blue'>
                <Header.Content>Create Your Profile</Header.Content>
                <Header.Subheader>
                  Let's get some information to make your profile stand out
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column width={12} />
          </Grid>
          <Form>
            <Grid columns='equal'>
              <Grid.Column>
                <Divider horizontal>
                  <Header as='h3'>
                    <Icon name='user plus' />
                    Hey {auth.user && auth.user.name.toUpperCase()} create your
                    profile
                  </Header>
                </Divider>
                <Segment raised color='blue'>
                  <Form.Field>
                    <label>Status</label>
                    <Dropdown
                      button
                      className='icon'
                      fluid
                      labeled
                      icon={icon}
                      search
                      placeholder='Select your Professional Status'
                      options={statusOptions}
                      onChange={(e, { value }) =>
                        setFormData({ ...formData, status: value })
                      }
                    />
                    <p style={{ color: "#888" }}>
                      Give us an idea of where you are at in your career
                    </p>
                  </Form.Field>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <Form.Input
                        label='Company'
                        placeholder='Enter your company'
                        name='company'
                        value={company}
                        onChange={e => handleChange(e)}
                      />
                      <p style={{ color: "#888" }}>
                        Could be your own company or one you work for
                      </p>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        label='Website'
                        placeholder='Website'
                        name='website'
                        value={website}
                        onChange={e => handleChange(e)}
                      />
                      <p style={{ color: "#888" }}>
                        Could be your own company or one you work for
                      </p>
                    </Form.Field>
                  </Form.Group>
                  <Form.Field>
                    <Form.Input
                      label='Location'
                      placeholder='Enter your location'
                      name='location'
                      value={location}
                      onChange={e => handleChange(e)}
                    />
                    <p style={{ color: "#888", marginTop: "-15px" }}>
                      City & state suggested (eg. Boston, MA)
                    </p>
                  </Form.Field>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <Form.Input
                        label='Skills'
                        placeholder='Write your skills'
                        required
                        name='skills'
                        value={skills}
                        onChange={e => handleChange(e)}
                      />
                      <p style={{ color: "#888" }}>
                        Please use comma separated values (eg.
                        HTML,CSS,JavaScript,PHP)
                      </p>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        label='Github Username'
                        placeholder='Github Username'
                        name='githubusername'
                        value={githubusername}
                        onChange={e => handleChange(e)}
                      />
                      <p style={{ color: "#888" }}>
                        If you want your latest repos and a Github link, include
                        your username in Github
                      </p>
                    </Form.Field>
                  </Form.Group>
                  <Form.Field>
                    <p>
                      <strong>Tell us more</strong>
                    </p>
                    <TextArea
                      placeholder='A short bio of yourseft'
                      style={{ minHeight: 100 }}
                      name='bio'
                      value={bio}
                      onChange={e => handleChange(e)}
                    />
                    <p style={{ color: "#888" }}>
                      Tell us a little about yourself
                    </p>
                  </Form.Field>
                </Segment>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider
                  horizontal
                  onClick={() => toggleSocialInputs(!displaySocialInputs)}
                >
                  <Header as='h3'>
                    <Button as='div' labelPosition='right'>
                      <Button icon primary>
                        <Icon name='share alternate square' />
                      </Button>
                      <Label as='a' basic pointing='left'>
                        Add Social Network Links
                      </Label>
                    </Button>
                    {/* Add Social Network Links */}
                  </Header>
                </Divider>
                {displaySocialInputs && (
                  <Fragment>
                    <Segment raised color='blue'>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={3} />
                          <Grid.Column width={10}>
                            <Grid>
                              <Grid.Column width={1}>
                                <Icon name='twitter' size='big' color='blue' />
                              </Grid.Column>
                              <Grid.Column width={15}>
                                <Form.Field>
                                  <Form.Input
                                    placeholder='Twitter URL'
                                    name='twitter'
                                    value={twitter}
                                    onChange={e => handleChange(e)}
                                  />
                                </Form.Field>
                              </Grid.Column>
                            </Grid>

                            <Grid>
                              <Grid.Column width={1}>
                                <Icon name='facebook' size='big' color='blue' />{" "}
                              </Grid.Column>
                              <Grid.Column width={15}>
                                <Form.Field>
                                  <Form.Input
                                    placeholder='Facebook URL'
                                    name='facebook'
                                    value={facebook}
                                    onChange={e => handleChange(e)}
                                  />
                                </Form.Field>
                              </Grid.Column>
                            </Grid>

                            <Grid>
                              <Grid.Column width={1}>
                                <Icon name='youtube' size='big' color='red' />{" "}
                              </Grid.Column>
                              <Grid.Column width={15}>
                                <Form.Field>
                                  <Form.Input
                                    placeholder='YouTube URL'
                                    name='youtube'
                                    value={youtube}
                                    onChange={e => handleChange(e)}
                                  />
                                </Form.Field>
                              </Grid.Column>
                            </Grid>

                            <Grid>
                              <Grid.Column width={1}>
                                <Icon name='linkedin' size='big' color='blue' />{" "}
                              </Grid.Column>
                              <Grid.Column width={15}>
                                <Form.Field>
                                  <Form.Input
                                    placeholder='LinkedIn URL'
                                    name='linkedin'
                                    value={linkedin}
                                    onChange={e => handleChange(e)}
                                  />
                                </Form.Field>
                              </Grid.Column>
                            </Grid>

                            <Grid>
                              <Grid.Column width={1}>
                                <Icon
                                  name='instagram'
                                  size='big'
                                  color='blue'
                                />{" "}
                              </Grid.Column>
                              <Grid.Column width={15}>
                                <Form.Field>
                                  <Form.Input
                                    placeholder='Instagram URL'
                                    name='instagram'
                                    value={instagram}
                                    onChange={e => handleChange(e)}
                                  />
                                </Form.Field>
                              </Grid.Column>
                            </Grid>
                          </Grid.Column>
                          <Grid.Column width={3} />
                        </Grid.Row>
                      </Grid>
                    </Segment>
                  </Fragment>
                )}
              </Grid.Column>
            </Grid>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Button primary onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
          <Fragment>
            {alerts !== null &&
              alerts.length > 0 &&
              alerts.map(alert => (
                <React.Fragment key={alert.id}>
                  {alert.alertType === "error" ? (
                    <Message error>
                      <Message.Header>{alert.msgHeader}</Message.Header>
                      <p>{alert.msgContent}</p>
                    </Message>
                  ) : (
                    <div style={{ display: "none" }} />
                  )}
                </React.Fragment>
              ))}
          </Fragment>
          <Fragment>
            {alerts !== null &&
              alerts.length > 0 &&
              alerts.map(alert => (
                <React.Fragment key={alert.id}>
                  {alert.alertType === "success" ? (
                    <Message positive>
                      <Message.Header>{alert.msgHeader}</Message.Header>
                      <p>{alert.msgContent}</p>
                    </Message>
                  ) : (
                    <div style={{ display: "none" }} />
                  )}
                </React.Fragment>
              ))}
          </Fragment>
        </Segment>
      </Container>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfileAct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert,
  apiUrl: state.apiUrl.apiUrl,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    createProfileAct: (apiUrl, formData, history) => {
      dispatch(createProfileAct(apiUrl, formData, history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateProfile));
