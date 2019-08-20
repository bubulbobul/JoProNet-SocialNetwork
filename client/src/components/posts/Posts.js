import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getAllPostsAct } from "../../actions/postAct";
import { addLikeAct, removeLikeAct } from "../../actions/postAct";
import { deletePostAct } from "../../actions/postAct";
import { addPostAct } from "../../actions/postAct";
import { MainLoader } from "../../utils/Loader";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Grid,
  Segment,
  Icon,
  Divider
} from "semantic-ui-react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = ({
  auth,
  addPostAct,
  deletePostAct,
  addLikeAct,
  removeLikeAct,
  apiUrl,
  getAllPostsAct,
  post: { posts, loading }
}) => {
  useEffect(() => {
    getAllPostsAct(apiUrl);
  }, []);

  return loading && posts.length === 0 ? (
    <MainLoader />
  ) : (
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
          <Fragment>
            <Grid columns='equal'>
              <Grid.Column>
                <Header as='h1' color='blue'>
                  Welcome to our Community
                </Header>
              </Grid.Column>
            </Grid>
            <Grid columns='equal'>
              <Grid.Column>
                <Header as='h3'>
                  <Icon name='exchange' />
                  <Header.Content>Let's talk together ...</Header.Content>
                </Header>
              </Grid.Column>
            </Grid>
          </Fragment>
          <Divider hidden />
          <Fragment>
            <PostForm apiUrl={apiUrl} addPostAct={addPostAct} />
          </Fragment>
          <Fragment>
            {posts.map(post => (
              <PostItem
                key={post._id}
                post={post}
                removeLikeAct={removeLikeAct}
                addLikeAct={addLikeAct}
                auth={auth}
                apiUrl={apiUrl}
                deletePostAct={deletePostAct}
              />
            ))}
          </Fragment>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
        </Segment>
      </Container>
    </Fragment>
  );
};

Posts.propTypes = {
  getAllPostsAct: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  post: state.post,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    getAllPostsAct: apiUrl => {
      dispatch(getAllPostsAct(apiUrl));
    },
    addLikeAct: (apiUrl, postId) => {
      dispatch(addLikeAct(apiUrl, postId));
    },
    removeLikeAct: (apiUrl, postId) => {
      dispatch(removeLikeAct(apiUrl, postId));
    },
    deletePostAct: (apiUrl, postId, postName) => {
      dispatch(deletePostAct(apiUrl, postId, postName));
    },
    addPostAct: (apiUrl, formData) => {
      dispatch(addPostAct(apiUrl, formData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
