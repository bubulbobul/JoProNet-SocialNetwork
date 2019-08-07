import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoadingProfile } from "../../utils/Loader";
import { getPostAct } from "../../actions/postAct";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Grid,
  Segment,
  Image,
  Divider,
  Message,
  Button,
  Icon
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { addCommentAct } from "../../actions/postAct";
import { deleteCommentAct } from "../../actions/postAct";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const SinglePost = ({
  auth,
  apiUrl,
  alerts,
  getPostAct,
  addCommentAct,
  deleteCommentAct,
  post: { post, loading },
  match
}) => {
  useEffect(() => {
    getPostAct(apiUrl, match.params.id);
  }, []);

  return loading || post == null ? (
    <LoadingProfile />
  ) : (
    <Fragment>
      <Container>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />

        <Segment>
          <Fragment>
            {alerts !== null &&
              alerts.length > 0 &&
              alerts.map(alert => (
                <Fragment key={alert.id}>
                  {alert.alertType === "success" && (
                    <Message positive>
                      <Message.Header>{alert.msgHeader}</Message.Header>
                      <p>{alert.msgContent}</p>
                    </Message>
                  )}
                </Fragment>
              ))}
          </Fragment>
          <Fragment>
            {alerts !== null &&
              alerts.length > 0 &&
              alerts.map(alert => (
                <Fragment key={alert.id}>
                  {alert.alertType === "error" && (
                    <Message error>
                      <Message.Header>{alert.msgHeader}</Message.Header>
                      <p>{alert.msgContent}</p>
                    </Message>
                  )}
                </Fragment>
              ))}
          </Fragment>
          <Fragment>
            <Link to='/posts'>
              <Button icon labelPosition='left' floated='left'>
                Go Back Posts
                <Icon name='left arrow' />
              </Button>
            </Link>
          </Fragment>
          <Divider hidden />
          <Divider hidden />
          <Segment raised>
            <Fragment>
              <Segment raised>
                <Grid stackable>
                  <Grid.Column width={3}>
                    <Container textAlign='center'>
                      <Image
                        as={Link}
                        to={`/profile/${post.user}`}
                        src={post.avatar}
                        circular
                        size='small'
                        centered
                      />
                      <Divider hidden style={{ margin: "5% 0" }} />
                      <Link to={`/profile/${post.user}`}>
                        <Header>{post.name}</Header>
                      </Link>
                    </Container>
                  </Grid.Column>
                  <Grid.Column width={12} style={{ paddingTop: "3%" }}>
                    <Container textAlign='justified'>
                      {post.title && <Header>{post.title}</Header>}
                      <p>{post.text}</p>
                    </Container>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Fragment>
            <Fragment>
              <CommentForm
                apiUrl={apiUrl}
                addCommentAct={addCommentAct}
                postId={post._id}
              />
            </Fragment>
            <Fragment>
              {post.comments.map(comment => (
                <CommentItem
                  key={comment._id}
                  comment={comment}
                  postId={post._id}
                  deleteCommentAct={deleteCommentAct}
                  auth={auth}
                  apiUrl={apiUrl}
                />
              ))}
            </Fragment>
          </Segment>
        </Segment>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  auth: state.auth,
  alerts: state.alert,
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    getPostAct: (apiUrl, singlePostId) => {
      dispatch(getPostAct(apiUrl, singlePostId));
    },
    addCommentAct: (apiUrl, commentId, formData) => {
      dispatch(addCommentAct(apiUrl, commentId, formData));
    },
    deleteCommentAct: (apiUrl, postId, commentId) => {
      dispatch(deleteCommentAct(apiUrl, postId, commentId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost);
