import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createOrUpdateProfileAct } from "../../../actions/profileAct";
import { Transition as TransitionSpring, animated } from 'react-spring/renderprops';

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
  Dropdown
} from "semantic-ui-react";
import { statusOptions } from "../../../utils/dropdownData";
import { countryOptions } from "../../../utils/dropdownData";

const CreateProfile = ({ apiUrl, auth, createOrUpdateProfileAct, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    number: "",
    area: "",
    workingemail: "",
    showworkingemail: false,
    shownumber: false,
    languages: "",
    country: "",
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
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [error, setError] = useState(false)
  const icon = "black tie";
  const edit = false;

  const {
    company,
    website,
    area,
    number,
    languages,
    location,
    skills,
    status,
    githubusername,
    showworkingemail,
    workingemail,
    shownumber,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (skills === "" || languages === "" || status === "") {
      createOrUpdateProfileAct(apiUrl, formData, history, edit);
      setError(true);
      window.scrollTo(0, 0)
    } else {
      createOrUpdateProfileAct(apiUrl, formData, history, edit);
      setError(false)
      handleReset();
    }
  };

  const handleReset = e => {
    setFormData({
      company: "",
      number: "",
      area: "",
      workingemail: "",
      showworkingemail: false,
      shownumber: false,
      languages: "",
      country: "",
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
                      error={error}
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
                        Could be your company's website or your portofolio
                        (eg. https://www.google.com/)
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
                    <p style={{ color: "#888" }}>
                      City & state suggested (eg. Boston, MA)
                    </p>
                  </Form.Field>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <Form.Input
                        label='Skills'
                        placeholder='Write your skills'
                        name='skills'
                        value={skills}
                        onChange={e => handleChange(e)}
                        error={error}
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
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <Form.Input
                        label='Spoken Languages'
                        placeholder='Which language do you speak'
                        name='languages'
                        value={languages}
                        onChange={e => handleChange(e)}
                        error={error}
                      />
                      <p style={{ color: "#888" }}>
                        Please use comma separated values (eg.
                        French,English, Spain,German)
                      </p>
                    </Form.Field>
                  </Form.Group>
                  <Form.Field>
                    <label>Tell us more</label>
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

                <Divider horizontal>
                  <Header as='h3'>Let's get in Touch</Header>
                </Divider>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label htmlFor='country'>Country</label>
                    <Dropdown
                      button
                      className='icon'
                      fluid
                      labeled
                      icon='world'
                      search
                      placeholder='From which country are you from'
                      options={countryOptions}
                      onChange={(e, { value }) =>
                        setFormData({ ...formData, country: value })
                      }
                    />
                    <p style={{ color: "#888" }}>
                      You can search for a country
                            </p>
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      label='Locality'
                      placeholder='Locality'
                      name='area'
                      value={area}
                      onChange={e => handleChange(e)}
                    />
                    <p style={{ color: "#888" }}>Your locality can be a state or a city</p>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <Form.Input
                      label='Number'
                      placeholder='Enter your number'
                      name='number'
                      value={number}
                      onChange={e => handleChange(e)}
                    />
                    <p style={{ color: "#888" }}>Please enter your number</p>
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      label='Working Email'
                      placeholder='Enter your joinable email'
                      name='workingemail'
                      value={workingemail}
                      onChange={e => handleChange(e)}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Publish my number ?</label>
                    <Form.Radio
                      label='Yes, I agree'
                      checked={shownumber === true}
                      onChange={e => {
                        setFormData({ ...formData, shownumber: true });
                      }}
                    />
                    <Form.Radio
                      label='No, I refuse'
                      checked={shownumber !== true}
                      onChange={e => {
                        setFormData({ ...formData, shownumber: false });
                      }}
                    />
                  </Form.Field>
                  <Form.Field >
                    <label>Publish my working email ?</label>
                    <Form.Radio
                      label='Yes, I agree'
                      checked={showworkingemail === true}
                      onChange={e => {
                        setFormData({ ...formData, showworkingemail: true });
                      }}
                    />
                    <Form.Radio
                      label='No, I refuse'
                      checked={showworkingemail !== true}
                      onChange={e => {
                        setFormData({ ...formData, showworkingemail: false });
                      }}
                    />
                  </Form.Field>
                </Form.Group>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider
                  horizontal
                  onClick={() => toggleSocialInputs(!displaySocialInputs)}
                >
                  <Header as='h3'>
                    <Button as='div' labelPosition='right'>
                      <Button icon primary style={{ borderRadius: "50px 0 0 50px" }}>
                        <Icon name='share alternate square' />
                      </Button>
                      <Label as='a' basic pointing='left' style={{ borderRadius: "0 50px 50px 0" }}>
                        Add Social Network Links
                      </Label>
                    </Button>
                  </Header>
                </Divider>
                <TransitionSpring
                  native
                  items={displaySocialInputs}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                  config={{ delay: 500 }}
                >
                  {
                    show => show && (props => (
                      <animated.div style={props}>
                        <Fragment>
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
                        </Fragment>
                      </animated.div>
                    ))
                  }
                </TransitionSpring>
              </Grid.Column>
            </Grid>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Button
              primary
              icon
              labelPosition='left'
              onClick={e => handleSubmit(e)}
              style={{ borderRadius: "50px" }}
            >
              Submit
              <Icon name='chevron down' />
            </Button>
            <Button icon labelPosition='left' onClick={e => handleReset(e)} style={{ borderRadius: "50px" }}>
              Cancel
              <Icon name='cancel' />
            </Button>
            <Link to='/dashboard'>
              <Button icon labelPosition='left' floated='right' style={{ borderRadius: "50px" }}>
                Dashboard
                <Icon name='left arrow' />
              </Button>
            </Link>
          </Form>
        </Segment>
      </Container>
      <Divider hidden />
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createOrUpdateProfileAct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    createOrUpdateProfileAct: (apiUrl, formData, history, edit) => {
      dispatch(createOrUpdateProfileAct(apiUrl, formData, history, edit));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateProfile));
