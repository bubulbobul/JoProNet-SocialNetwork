import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getSingleEducationAct, deleteEducationAct, editSingleEducationAct } from "../../../actions/profileAct";
import { LoaderEducationDetails } from "../../../utils/Loader";
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
  Checkbox,
  Popup
} from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { countryOptions } from "../../../utils/dropdownData";

const EducationDetails = ({ apiUrl, profile: {education, profileLoading}, getSingleEducationAct, deleteEducationAct,  
  editSingleEducationAct, match, history}) => {
  const [edit, setEdit] = useState(false)
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    country: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  useEffect(() => {
    getSingleEducationAct(apiUrl, match.params.id);
  }, []);

  const handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    // console.log(formData)
    e.preventDefault();
    editSingleEducationAct(apiUrl, formData, education._id, formData.school);
    setFormData(formData)
    getSingleEducationAct(apiUrl, match.params.id);
    setEdit(false);
  };

  const handleDelete = (e, id, school) => {
    deleteEducationAct(apiUrl, id, school, history, true);
  };

  const goBack = (history) => {
    history.go(-1);
    // history.goBack();
  }

  const onDateChange = (e, name) => {
    if (name.name === "from") {
      // console.log(name.value);
      setFormData({ ...formData, from: name.value });
    }

    if (name.name === "to") {
      // console.log(name.value);
      setFormData({ ...formData, to: name.value });
    }
  };

  const editExperienceTrue = e => {
    setEdit(true);
    setFormData({
      school: profileLoading || !education.school ? "" : education.school,
      degree: profileLoading || !education.degree ? "" : education.degree,
      fieldofstudy: profileLoading || !education.fieldofstudy ? "" : education.fieldofstudy,
      from: profileLoading || !education.from ? "" : education.from,
      to: profileLoading || !education.to ? "" : education.to,
      current: profileLoading || !education.current ? false : education.current,
      description: profileLoading || !education.description ? "" : education.description
    });
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
              profileLoading === null || education === null ? (
                <Fragment>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <LoaderEducationDetails />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                </Fragment>
              ) :
                (
                  <Fragment>
                    {
                      edit === false ?
                      (<Fragment>
                        <Grid>
                        <Grid.Row>
                          <Grid.Column floated='left' width={8}>
                            <Header as='h2'>
                              <Icon name='book' color='blue' />
                              <Header.Content>
                                {education.school}
                                <Header.Subheader>
                                  {education.current === true
                                    ? `I study ${education.fieldofstudy} in ${education.school} `
                                    : `I got my ${education.degree} in ${education.fieldofstudy} in ${education.school}`}
                                </Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Grid.Column>
                          <Grid.Column width={8}>
                            <Header as='h4' floated='right'>
                              My education with {education.school}
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
                                <Icon name='pencil alternate' color='blue' />
                                <Header.Content>What I Did</Header.Content>
                              </Header>
                              <Fragment>
                                {education.description === "" ? (
                                  <Fragment>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Message
                                      warning
                                      header='Warning'
                                      content='You did
                                  not add any description of your education'
                                    />
                                  </Fragment>
                                ) : (
                                  <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {education.description}
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
                                <Icon name='map marker alternate' color='blue' />
                                <Header.Content>Where ?</Header.Content>
                              </Header>
                              <Header as='h5'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <strong>Country:</strong>&nbsp;&nbsp;{education.country}
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
                                <Moment format='YYYY/MM/DD'>{education.from}</Moment>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To&nbsp;:&nbsp;&nbsp;&nbsp;
                                {education.to === null ? (
                                  " Now"
                                ) : (
                                  <Moment format='YYYY/MM/DD'>{education.to}</Moment>
                                )}
                              </Header>
                            </Container>
                          </Grid.Column>
                          <Grid.Column width={3} floated='right'>
                            <Divider hidden />
                            <Divider />
                                <Popup content='Edit' trigger={<Button circular onClick={e => editExperienceTrue(e)} floated='right' icon='edit' color="yellow" />} />
                                <Popup content='Delete' trigger={<Button circular onClick={e => handleDelete(e, education._id, education.company)} floated='right' icon='remove' color="red" />} />
                                <Link to={`/add-education`}>
                                  <Popup content='Add a new education' trigger={<Button circular floated='right' icon='add' primary />} />
                                </Link>
                                <Popup content='Go Back' trigger={<Button circular onClick={e => goBack(history)} floated='right' icon='chevron left' />} />
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                              </Fragment>) : (
                                <Fragment>
                                  <Divider hidden />
                                  <Form>
                                  <Grid>
                                  <Grid.Row>
                                    <Grid.Column floated='left'>
                                      <Header as='h2'>
                                        <Icon name='book' color='blue' />
                                        <Header.Content>
                                          <Header.Subheader>
                                          <Form.Group widths='equal'>
                                            <Form.Field>
                                              <Form.Input
                                                label='School or Bootcamp'
                                                placeholder='School or Bootcamp attended'
                                                name='school'
                                                value={school}
                                                onChange={e => handleChange(e)}
                                              />
                                            </Form.Field>
                                            <Form.Field>
                                              <Form.Input
                                                label='Degree or Certificate'
                                                placeholder=' Degree or Certificate'
                                                name='degree'
                                                value={degree}
                                                onChange={e => handleChange(e)}
                                              />
                                            </Form.Field>
                                            <Form.Field>
                                              <Form.Input
                                                label='Field of study'
                                                placeholder='What did you studied'
                                                name='fieldofstudy'
                                                value={fieldofstudy}
                                                onChange={e => handleChange(e)}
                                              />
                                            </Form.Field>
                                          </Form.Group>
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
                                          <Icon name='pencil alternate' color='blue' />
                                          <Header.Content>What I Did</Header.Content>
                                        </Header>
                                        <Fragment>
                                        <Form.Field>
                                          <label>Program description</label>
                                          <TextArea
                                            placeholder='What did you do ?'
                                            style={{ minHeight: 100 }}
                                            name='description'
                                            value={description}
                                            onChange={e => handleChange(e)}
                                          />
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
                                          <Icon name='map marker alternate' color='blue' />
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
                                              onChange={(e, name) => onDateChange(e, name)}
                                              dateFormat='MM-DD-YYYY'
                                            />
                                          </Form.Field>
                                        </Form.Group>
                                        <Form.Field>
                                            <Checkbox
                                              style={{ marginTop: "15%", marginLeft: "15%" }}
                                              label='Current Job'
                                              name='current'
                                              onChange={e => {
                                                setFormData({
                                                  ...formData,
                                                  current: !current,
                                                  to: ""
                                                });
                                                toggleDisabled(!toDateDisabled);
                                              }}
                                            />
                                          </Form.Field>
                                      </Container>
                                    </Grid.Column>
                                    <Grid.Column width={3} floated='right'>
                                      <Divider hidden />
                                      <Divider />
                                      <Popup content='Cancel' trigger={<Button circular onClick={e => setEdit(false)} floated='right' icon='remove' color="red" />} />
                                    <Popup content='Submit' trigger={<Button circular onClick={e => handleSubmit(e)} floated='right' icon='chevron down' color="green" />} />
                                    <Link to={`/add-education`}>
                                      <Popup content='Add a new education' trigger={<Button circular floated='right' icon='add' primary />} />
                                    </Link>
                                    <Popup content='Go Back' trigger={<Button circular onClick={e => goBack(history)} floated='right' icon='chevron left' />} />
                                    </Grid.Column>
                                  </Grid.Row>
                                  </Grid>
                                  </Form>
                                </Fragment>
                              )
                    }
                  </Fragment>
                )
          }
          
        </Segment>
      </Container>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    apiUrl: state.apiUrl.apiUrl,
    auth: state.auth,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleEducationAct: (apiUrl, eduId) => {
      dispatch(getSingleEducationAct(apiUrl, eduId));
    },
    deleteEducationAct: (apiUrl, id, school, history, detailPage) => {
      dispatch(deleteEducationAct(apiUrl, id, school, history, detailPage));
    },
    editSingleEducationAct: (apiUrl, formData, expId, school) => {
      dispatch(editSingleEducationAct(apiUrl, formData, expId, school));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EducationDetails));
