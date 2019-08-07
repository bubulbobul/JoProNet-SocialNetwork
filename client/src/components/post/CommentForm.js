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
import "semantic-ui-css/semantic.min.css";

const CommentForm = ({ apiUrl, postId, addCommentAct }) => {
  const [formData, setFormData] = useState({
    text: ""
  });
  const [displayCommentForm, toggleCommentForm] = useState(false);

  const { text } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = e => {
    setFormData({
      text: ""
    });
  };

  return (
    <Segment>
      <Fragment>
        <Divider
          horizontal
          onClick={() => toggleCommentForm(!displayCommentForm)}
        >
          <Header as='h3'>
            <Button as='div' labelPosition='right'>
              <Button icon primary>
                <Icon name='compose' />
              </Button>
              <Label as='a' basic pointing='left'>
                Add a Comment
              </Label>
            </Button>
          </Header>
        </Divider>
      </Fragment>
      {displayCommentForm && (
        <Fragment>
          <Form>
            <Form.Field>
              <TextArea
                placeholder='What do you think ?'
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
                addCommentAct(apiUrl, postId, formData);
                handleReset(e);
              }}
            >
              Submit
              <Icon name='chevron down' />
            </Button>
            <Button icon labelPosition='left' onClick={e => handleReset(e)}>
              Cancel
              <Icon name='cancel' />
            </Button>
          </Form>
        </Fragment>
      )}
    </Segment>
  );
};

export default CommentForm;
