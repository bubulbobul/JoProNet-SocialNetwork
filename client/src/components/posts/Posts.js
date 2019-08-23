import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllPostsAct, addLikeAct, removeLikeAct, deletePostAct, addPostAct } from "../../actions/postAct";
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
import PostsPagination from "./PostsPagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    getAllPostsAct(apiUrl);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePaginationChange = (e, pageInfo) => {
    setCurrentPage(pageInfo.activePage)
  }

  const handleChangePostPerPage = (e, number) => {
    setPostsPerPage(number.value)
    window.scrollTo(0, 0)
  }

  const tr = false;

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
              {
                currentPosts.length > 0 ? (
                  <Fragment>
                    {currentPosts.map(post => (
                      <PostItem
                        key={post._id}
                        post={post}
                        removeLikeAct={removeLikeAct}
                        addLikeAct={addLikeAct}
                        auth={auth}
                        apiUrl={apiUrl}
                        deletePostAct={deletePostAct}
                        tr={tr}
                      />
                    ))}
                    <PostsPagination
                      currentPage={currentPage}
                      postsPerPage={postsPerPage}
                      totalPosts={posts.length}
                      handlePaginationChange={handlePaginationChange}
                      handleChangePostPerPage={handleChangePostPerPage}
                    />
                  </Fragment>
                ) : (
                    <Header size='huge'>No posts found...</Header>
                  )
              }
            </Fragment>
            <Divider hidden />
          </Segment>
        </Container>
        <Divider hidden />
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
    deletePostAct: (apiUrl, postId, postName, tr) => {
      dispatch(deletePostAct(apiUrl, postId, postName, tr));
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
