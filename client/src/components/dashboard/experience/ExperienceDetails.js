import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSingleExperienceAct, deleteExperienceAct, editSingleExperienceAct } from "../../../actions/profileAct";
import { LoaderExperienceDetails } from "../../../utils/Loader";
import Moment from "react-moment";
import {
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Divider,
  Button,
  Message,
  Form,
  TextArea,
  Dropdown,
  Checkbox
} from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { countryOptions } from "../../../utils/dropdownData";

const ExperienceDetails = ({ apiUrl, profile: { experience, profileLoading }, match, history,
  getSingleExperienceAct, deleteExperienceAct, editSingleExperienceAct }) => {
  const [edit, setEdit] = useState(false)
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    country: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });
  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;
  // console.log(experience)


  useEffect(() => {
    getSingleExperienceAct(apiUrl, match.params.id);
    experience &&
      setFormData({
        company: profileLoading || !experience.company ? "" : experience.company,
        title: profileLoading || !experience.title ? "" : experience.title,
        country: profileLoading || !experience.country ? "" : experience.country,
        location: profileLoading || !experience.location ? "" : experience.location,
        from: profileLoading || !experience.from ? "" : experience.from,
        to: profileLoading || !experience.to ? "" : experience.to,
        current: profileLoading || !experience.current ? false : experience.current,
        description: profileLoading || !experience.description ? "" : experience.description
      });
  }, [profileLoading]);

  const handleDelete = (e, id, company) => {
    deleteExperienceAct(apiUrl, id, company, history, true);
  };


  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    editSingleExperienceAct(apiUrl, formData, experience._id, formData.company);
    setFormData(formData)
    getSingleExperienceAct(apiUrl, match.params.id);
    setEdit(false);
  };

  const goBack = (history) => {
    history.go(-1);
    // history.goBack();
  }

  const onDateChange = (e, name) => {
    if (name.name === "from") {
      setFormData({ ...formData, from: name.value });
    }

    if (name.name === "to") {
      setFormData({ ...formData, to: name.value });
    }
  };

  const editExperienceTrue = e => {
    setEdit(true)
  }

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
            profileLoading === null || experience === null ? (
              <Fragment>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <LoaderExperienceDetails />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
              </Fragment>
            ) :
              (
                <Fragment>
                  {
                    edit === false ?
                      (
                        <Fragment>
                          <Divider hidden />
                          <Grid>
                            <Grid.Row>
                              <Grid.Column floated='left' width={8}>
                                <Header as='h2'>
                                  <Icon name='building' color='blue' />
                                  <Header.Content>
                                    {experience.company}
                                    <Header.Subheader>
                                      I {experience.current === true ? " work " : " worked "}
                                      for {experience.company} as {experience.title}
                                    </Header.Subheader>
                                  </Header.Content>
                                </Header>
                              </Grid.Column>
                              <Grid.Column width={8}>
                                <Header as='h4' floated='right'>
                                  My Experience with {experience.company}
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
                                      <Fragment>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Message
                                          warning
                                          header='Warning'
                                          content='You did not add any description of your education'
                                        />
                                      </Fragment>
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
                                    {
                                      experience.country && (
                                        <Fragment>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          <strong>Country:</strong>&nbsp;&nbsp;{experience.country}
                                          <br />
                                        </Fragment>
                                      )
                                    }
                                    {
                                      experience.location && (
                                        <Fragment>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          <strong>Located in:</strong>&nbsp;&nbsp;
                                          {experience.location}
                                        </Fragment>
                                      )
                                    }
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
                                <Button icon labelPosition='left' floated='right' onClick={e => goBack(history)}>
                                  Go Back
                                  <Icon name='left arrow' />
                                </Button>
                                <Divider hidden />
                                <Divider hidden />
                                <Divider hidden />
                                <Button icon labelPosition='left' floated='right' onClick={e => editExperienceTrue(e)}
                                  color="yellow"
                                >
                                  Edit
                                  <Icon name='edit' />
                                </Button>
                                <Divider hidden />
                                <Divider hidden />
                                <Divider hidden />
                                <Button
                                  icon
                                  labelPosition='left'
                                  floated='right'
                                  color='red'
                                  onClick={e =>
                                    handleDelete(e, experience._id, experience.company)
                                  }
                                >
                                  Delete
                                  <Icon name='remove circle' />
                                </Button>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                          <Divider hidden />
                          <Divider hidden />
                          <Divider hidden />
                        </Fragment>
                      ) : (
                        <Fragment>
                          <Fragment>
                            <Divider hidden />
                            <Form>
                              <Grid>
                                <Grid.Row>
                                  <Grid.Column floated='left' width={8}>
                                    <Header as='h2'>
                                      <Icon name='building' color='blue' />
                                      <Header.Content>

                                        <Header.Subheader>
                                          <Form.Group>
                                            <Form.Input
                                              label='Company'
                                              placeholder='Enter the name of your company'
                                              name='company'
                                              value={company}
                                              onChange={e => handleChange(e)}
                                            />
                                            <Form.Input
                                              label='Job Title'
                                              placeholder='Enter your job'
                                              name='title'
                                              value={title}
                                              onChange={e => handleChange(e)}
                                            />
                                          </Form.Group>
                                        </Header.Subheader>
                                      </Header.Content>
                                    </Header>
                                  </Grid.Column>
                                  <Grid.Column width={8}>
                                    <Header as='h4' floated='right'>
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
                                        <Form.Field>
                                          <label>Tell us more about your job</label>
                                          <TextArea
                                            placeholder='What did you do ?'
                                            style={{ minHeight: 100 }}
                                            name='description'
                                            value={description}
                                            onChange={e => handleChange(e)}
                                          />
                                          <p style={{ color: "#888" }}>
                                            Write short description of your job
                                          </p>
                                        </Form.Field>
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
                                      <Form.Field>
                                        <label htmlFor='country'>Country</label>
                                        <Dropdown
                                          button
                                          className='icon'
                                          fluid
                                          labeled
                                          icon='world'
                                          search
                                          placeholder='In which country did you work ?'
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
                                          label='Location'
                                          placeholder='Enter your location'
                                          name='location'
                                          value={location}
                                          onChange={e => handleChange(e)}
                                        />
                                        <p style={{ color: "#888" }}>
                                          City & state suggested of the company (eg. Boston, MA)
                                          </p>
                                      </Form.Field>
                                    </Container>
                                  </Grid.Column>
                                  <Grid.Column width={7}>
                                    <Container>
                                      <Divider hidden />
                                      <Divider />
                                      <Header as='h2'>
                                        <Icon name='clock' color='blue' />
                                        <Header.Content>When ?</Header.Content>
                                      </Header>
                                      <Form.Group widths='equal'>
                                        <Form.Field>
                                          <label>From Date</label>
                                          <DateInput
                                            name='from'
                                            placeholder='month/day/year'
                                            value={from}
                                            clearable
                                            clearIcon={<Icon name='remove' color='red' />}
                                            iconPosition='left'
                                            onChange={(e, name) => onDateChange(e, name)}
                                            dateFormat='MM-DD-YYYY'
                                          />
                                        </Form.Field>
                                        <Form.Field disabled={toDateDisabled ? true : false}>
                                          <label>To Date</label>
                                          <DateInput
                                            name='to'
                                            placeholder='month/day/year'
                                            value={to}
                                            clearable
                                            clearIcon={<Icon name='remove' color='red' />}
                                            iconPosition='left'
                                            onChange={(e, name) => {
                                              onDateChange(e, name)
                                            }}
                                            dateFormat='MM-DD-YYYY'
                                          />
                                        </Form.Field>
                                      </Form.Group>
                                      <Form.Field>
                                        <Checkbox
                                          style={{ marginTop: "15%", marginLeft: "15%" }}
                                          label='Current Job'
                                          name='current'
                                          floated="left"
                                          onChange={e => {
                                            setFormData({ ...formData, current: !current, to: "" });
                                            toggleDisabled(!toDateDisabled);
                                          }}
                                        />
                                      </Form.Field>
                                    </Container>
                                  </Grid.Column>
                                  <Grid.Column width={3} floated='right' verticalAlign="bottom">
                                    <Button
                                      primary
                                      icon
                                      labelPosition='left'
                                      floated='right'
                                      onClick={e => handleSubmit(e)}
                                    >
                                      Submit
                                      <Icon name='chevron down' />
                                    </Button>
                                    <Divider hidden />
                                    <Divider hidden />
                                    <Button icon labelPosition='left' floated='right' onClick={e => {
                                      setEdit(false)
                                    }}>
                                      Cancel
                                    <Icon name='remove' />
                                    </Button>
                                    <Divider hidden />
                                    <Divider hidden />
                                    <Divider hidden />
                                    <Button icon labelPosition='left' floated='right' onClick={e => goBack(history)}>
                                      Go Back
                                    <Icon name='left arrow' />
                                    </Button>
                                  </Grid.Column>
                                </Grid.Row>
                              </Grid>
                            </Form>
                            <Divider hidden />
                            <Divider hidden />
                            <Divider hidden />
                          </Fragment>
                        </Fragment>
                      )
                  }
                </Fragment>
              )
          }
        </Segment>
      </Container>
      <Divider hidden />
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  // const id = ownmatch.params.id;
  // // console.log(id);

  // const experiences = state.profile.experiences;
  // // console.log("experiences", experiences);

  // const experience = experiences ? experiences[id] : null;
  // console.log(experience);

  return {
    apiUrl: state.apiUrl.apiUrl,
    auth: state.auth,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleExperienceAct: (apiUrl, expId) => {
      dispatch(getSingleExperienceAct(apiUrl, expId));
    },
    deleteExperienceAct: (apiUrl, id, company, history, detailPage) => {
      dispatch(deleteExperienceAct(apiUrl, id, company, history, detailPage));
    },
    editSingleExperienceAct: (apiUrl, formData, expId, company) => {
      dispatch(editSingleExperienceAct(apiUrl, formData, expId, company))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExperienceDetails));