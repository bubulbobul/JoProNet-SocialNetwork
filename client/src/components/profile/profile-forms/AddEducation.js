import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

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
  Checkbox,
  Message,
  Dropdown
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { DateInput } from "semantic-ui-calendar-react";
import { countryOptions } from "../../../utils/dropdownData";
import { connect } from "react-redux";
import { addEducationAct } from "../../../actions/profileAct";

const AddEducation = props => {
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

  const { apiUrl, auth, alerts } = props;

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  const handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log(formData);
    e.preventDefault();
    props.addEducationAct(apiUrl, formData, props.history);
    handleReset();
  };

  const handleReset = e => {
    setFormData({
      school: "",
      degree: "",
      fieldofstudy: "",
      country: "",
      from: "",
      to: "",
      current: false,
      description: ""
    });
  };

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

  return (
    <Fragment>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Segment color='blue'>
          <Grid columns='equal'>
            <Grid.Column>
              <Header as='h1' color='blue'>
                <Header.Content>Add Your Education</Header.Content>
                <Header.Subheader>
                  Add any school, bootcamp, etc that you have attended
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
                    <Icon name='graduation cap' />
                    Hey {auth.user && auth.user.name.toUpperCase()} you can add
                    your education right below
                  </Header>
                </Divider>
                <Segment raised color='blue'>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <Form.Input
                        label='School or Bootcamp'
                        placeholder='School or Bootcamp attended'
                        name='school'
                        value={school}
                        onChange={e => handleChange(e)}
                      />
                      <p style={{ color: "#888" }}>
                        Could be Harvard, Oxford etc.
                      </p>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        label='Degree or Certificate'
                        placeholder=' Degree or Certificate'
                        name='degree'
                        value={degree}
                        onChange={e => handleChange(e)}
                      />
                      <p style={{ color: "#888" }}>
                        Could be Bachelor, Master OR
                      </p>
                    </Form.Field>
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <Form.Input
                        label='Field of study'
                        placeholder='What did you studied'
                        name='fieldofstudy'
                        value={fieldofstudy}
                        onChange={e => handleChange(e)}
                      />
                      <p style={{ color: "#888" }}>
                        {" "}
                        It could be BCA, BBA, BCSci, MCA, MBA
                      </p>
                    </Form.Field>
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
                  </Form.Group>
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
                  </Form.Group>
                  <Form.Field>
                    <label>Program description</label>
                    <TextArea
                      placeholder='What did you do ?'
                      style={{ minHeight: 100 }}
                      name='description'
                      value={description}
                      onChange={e => handleChange(e)}
                    />
                    <p style={{ color: "#888" }}>
                      Write short description of your education
                    </p>
                  </Form.Field>
                </Segment>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
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
            >
              Submit
              <Icon name='chevron down' />
            </Button>
            <Button icon labelPosition='left' onClick={e => handleReset(e)}>
              Cancel
              <Icon name='cancel' />
            </Button>
            <Link to='/dashboard'>
              <Button icon labelPosition='left' floated='right'>
                Go Back
                <Icon name='left arrow' />
              </Button>
            </Link>
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

AddEducation.propTypes = {
  addEducationAct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert,
  apiUrl: state.apiUrl.apiUrl,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    addEducationAct: (apiUrl, formData, history) => {
      dispatch(addEducationAct(apiUrl, formData, history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddEducation));
