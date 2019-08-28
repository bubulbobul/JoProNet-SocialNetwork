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
import { Transition as TransitionSpring, animated } from 'react-spring/renderprops';

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
    <Segment raised style={{ backgroundColor: "#f4f4f4" }}>
      <Fragment>
        <Divider
          horizontal
          onClick={() => toggleCommentForm(!displayCommentForm)}
        >
          <Header as='h3'>
            <Button as='div' labelPosition='right'>
              <Button icon primary style={{ borderRadius: "50px 0 0 50px" }}>
                <Icon name='compose' />
              </Button>
              <Label as='a' basic pointing='left' style={{ borderRadius: "0 50px 50px 0 " }}>
                Add a Comment
              </Label>
            </Button>
          </Header>
        </Divider>
      </Fragment>
      <TransitionSpring
        native
        items={displayCommentForm}
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
                      style={{ borderRadius: "50px" }}
                      primary
                      icon
                      labelPosition='left'
                      onClick={e => {
                        addCommentAct(apiUrl, postId, formData);
                        handleReset(e);
                        toggleCommentForm(!displayCommentForm)
                      }}
                    >
                      Submit
              <Icon name='chevron down' />
                    </Button>
                    <Button
                      style={{ borderRadius: "50px" }}
                      icon labelPosition='left' onClick={e => {
                        handleReset(e)
                        toggleCommentForm(!displayCommentForm)
                      }}>
                      Cancel
              <Icon name='cancel' />
                    </Button>
                  </Form>
                </Fragment>
              </Fragment>
            </animated.div>
          ))
        }
      </TransitionSpring>
    </Segment>
  );
};

export default CommentForm;
