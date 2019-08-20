import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
  getPostAct,
  addCommentAct,
  deleteCommentAct,
  post,
  match
}) => {
  useEffect(() => {
    getPostAct(apiUrl, match.params.id);
  }, []);

  return (
    <Fragment>
      <Container>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Segment>
          {post == null || post.loading === null || post.post === null ? (
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
                <Link to='/posts'>
                  <Button icon labelPosition='left' floated='left'>
                    Go Back Posts
                    <Icon name='left arrow' />
                  </Button>
                </Link>
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
                        <Divider hidden style={{ margin: "5% 0" }} />
                        <Link to={`/profile/${post.post.user}`}>
                          <Header>{post.post.name}</Header>
                        </Link>
                      </Container>
                    </Grid.Column>
                    <Grid.Column width={12} style={{ paddingTop: "3%" }}>
                      <Container textAlign='justified'>
                        {post.post.title && <Header>{post.post.title}</Header>}
                        <p>{post.post.text}</p>
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
                {post.post.comments.map(comment => (
                  <CommentItem
                    key={comment._id}
                    comment={comment}
                    postId={post.post._id}
                    deleteCommentAct={deleteCommentAct}
                    auth={auth}
                    apiUrl={apiUrl}
                  />
                ))}
              </Fragment>
            </Fragment>
          )}
        </Segment>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </Container>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost);
