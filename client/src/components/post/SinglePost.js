import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { LoaderPost } from "../../utils/Loader";
import { getPostAct } from "../../actions/postAct";
import {
  Container,
  Header,
  Grid,
  Segment,
  Image,
  Divider,
  Button,
  Icon,
  Label,
  Popup
} from "semantic-ui-react";
import Moment from "react-moment";
import Linkify from 'react-linkify';
import { addCommentAct, deleteCommentAct, addLikeAct, removeLikeAct, deletePostAct } from "../../actions/postAct";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const SinglePost = (props) => {
  const {
    auth,
    apiUrl,
    getPostAct,
    addCommentAct,
    deleteCommentAct,
    removeLikeAct,
    addLikeAct,
    deletePostAct,
    post,
    match,
    history
  } = props;

  useEffect(() => {
    getPostAct(apiUrl, match.params.id);
  }, []);

  const componentDecorator = (href, text, key) => {
    return (
      <a href={href} key={key} target="_blank" rel='noopener noreferrer'>
        {text}
      </a>
    )
  };

  const goBack = (history) => {
    history.go(-1);
    // history.goBack();
  }

  const tr = true

  return (
    <Fragment>
      <Container>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Segment color="blue">
          {
            post == null || post.loading === null ||
              post.post === null ? (
                <Fragment>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <LoaderPost />
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                </Fragment>
              ) : (
                <Fragment>
                  <Fragment>
                    <Button style={{ borderRadius: "50px" }} icon labelPosition='left' floated='left' onClick={e => goBack(history)}>
                      Go Back
                        <Icon name='left arrow' />
                    </Button>
                  </Fragment>
                  <Divider hidden />
                  <Divider hidden />
                  <Fragment>
                    <Segment raised>
                      <Grid stackable>
                        <Grid.Column width={3}>
                          <Container textAlign='center'>
                            <Image
                              as={Link}
                              to={`/profile/${post.post.user}`}
                              src={post.post.avatar}
                              circular
                              size='small'
                              centered
                            />

                          </Container>
                        </Grid.Column>
                        <Grid.Column width={12} style={{ paddingTop: "3%" }}>
                          <Container textAlign='justified'>
                            {post.post.title && <Header>{post.post.title}</Header>}
                            <Linkify componentDecorator={componentDecorator}>{post.post.text}</Linkify>
                          </Container>
                        </Grid.Column>
                        <Grid.Column width={3}
                          style={{ paddingTop: "0" }}
                          verticalAlign='middle'>
                          <Link to={`/profile/${post.post.user}`}>
                            <Header textAlign="center">{post.post.name}</Header>
                          </Link>
                        </Grid.Column>
                        <Grid.Column width={12}
                          style={{ paddingTop: "0" }}
                          verticalAlign='middle'>
                          <Container textAlign='justified'>
                            <Button
                              as='div'
                              labelPosition='right'
                              onClick={e => {
                                addLikeAct(apiUrl, post.post._id);
                              }}
                            >
                              <Button icon style={{ borderRadius: "50px 0 0 50px" }}>
                                <Icon name='heart' />
                                {post.post.likes.length > 1 ? "Likes" : "Like"}
                              </Button>
                              <Label as='a' basic pointing='left' style={{ borderRadius: "0 50px 50px 0" }}>
                                {post.post.likes.length}
                              </Label>
                            </Button>
                            <Popup content='Dislike' trigger={
                              <Button circular onClick={e => removeLikeAct(apiUrl, post.post._id)} icon='heartbeat' />
                            }
                            />

                            <Header as='h5' color='grey' floated='right'>
                              Posted on <Moment format='YYYY/MM/DD'>{post.post.date}</Moment>{" "}
                            </Header>
                            {!auth.loading && post.post.user === auth.user._id && (
                              <Popup content='Delete' trigger={
                                <Button
                                  circular
                                  icon
                                  color='red'
                                  floated='right'
                                  onClick={e => deletePostAct(apiUrl, post.post._id, post.post.title, history, tr)}
                                >
                                  <Icon name='remove' />
                                </Button>} />
                            )}
                          </Container>
                        </Grid.Column>
                      </Grid>
                    </Segment>
                  </Fragment>
                  <Fragment>
                    <CommentForm
                      apiUrl={apiUrl}
                      addCommentAct={addCommentAct}
                      postId={post.post._id}
                    />
                  </Fragment>
                  <Fragment>
                    {
                      post.post.comments !== undefined &&
                      (
                        <Fragment>
                          {post.post.comments.map(comment => (
                            <CommentItem
                              key={comment._id}
                              comment={comment}
                              postId={post.post._id}
                              deleteCommentAct={deleteCommentAct}
                              auth={auth}
                              apiUrl={apiUrl}
                              history={history}
                            />
                          ))}
                        </Fragment>
                      )
                    }
                  </Fragment>
                </Fragment>
              )}
        </Segment>
      </Container>
      <Divider hidden />

    </Fragment>
  );
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  auth: state.auth,
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
    },
    addLikeAct: (apiUrl, postId) => {
      dispatch(addLikeAct(apiUrl, postId));
    },
    removeLikeAct: (apiUrl, postId) => {
      dispatch(removeLikeAct(apiUrl, postId));
    },
    deletePostAct: (apiUrl, postId, postName, history, tr) => {
      dispatch(deletePostAct(apiUrl, postId, postName, history, tr));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SinglePost));
