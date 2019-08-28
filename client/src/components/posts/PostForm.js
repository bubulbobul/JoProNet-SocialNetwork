import React, { Fragment, useState } from "react";

import {
  Button,
  Form,
  Header,
  Icon,
  TextArea,
  Segment,
  Divider,
  Label
} from "semantic-ui-react";

const PostForm = ({ apiUrl, addPostAct }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: ""
  });
  const [displayPostForm, togglePostForm] = useState(false);

  const { title, text } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = e => {
    setFormData({
      title: "",
      text: ""
    });
  };

  return (
    <Segment raised style={{ backgroundColor: "#f4f4f4" }}>
      <Fragment>
        <Divider horizontal onClick={() => togglePostForm(!displayPostForm)}>
          <Header as='h3'>
            <Button as='div' labelPosition='right'>
              <Button icon primary style={{ borderRadius: "50px 0 0 50px" }}>
                <Icon name='comment' />
              </Button>
              <Label as='a' basic pointing='left' style={{ borderRadius: "0 50px 50px 0" }}>
                Add a Post
              </Label>
            </Button>
          </Header>
        </Divider>
      </Fragment>
      {displayPostForm && (
        <Fragment>
          <Form>
            <Form.Field>
              <Form.Input
                label='Post Title'
                placeholder='Please enter the post title'
                name='title'
                value={title}
                onChange={e => handleChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <label>Post Content</label>
              <TextArea
                placeholder='Write here'
                style={{ minHeight: 100 }}
                name='text'
                value={text}
                onChange={e => handleChange(e)}
              />
            </Form.Field>
            <Button
              primary
              icon
              labelPosition='left'
              onClick={e => {
                addPostAct(apiUrl, formData);
                handleReset(e);
                togglePostForm(!displayPostForm)
              }}
              style={{ borderRadius: "50px" }}
            >
              Submit
              <Icon name='chevron down' />
            </Button>
            <Button style={{ borderRadius: "50px" }} icon labelPosition='left' onClick={e => {
              handleReset(e)
              togglePostForm(!displayPostForm)
            }}>
              Cancel
              <Icon name='cancel' />
            </Button>
          </Form>
        </Fragment>
      )}
    </Segment>
  );
};

export default PostForm;
