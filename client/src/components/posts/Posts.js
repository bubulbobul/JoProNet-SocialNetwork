import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getPostsAct } from "../../actions/postAct";
import { addLikeAct, removeLikeAct } from "../../actions/postAct";

import { LoadingProfile } from "../../utils/Loader";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Grid,
  Segment,
  Icon,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import PostItem from "./PostItem";

const Posts = ({
  auth,
  removeLikeAct,
  addLikeAct,
  apiUrl,
  getPostsAct,
  post: { posts, loading }
}) => {
  useEffect(() => {
    console.log("use effeeeeeeeeeeeeeeeeeeeeect");
    getPostsAct(apiUrl);
  }, []);

  return loading ? (
    <LoadingProfile />
  ) : (
    <Fragment>
      <Container>
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
          <Segment>
            <Fragment>
              {posts.map(post => (
                <PostItem
                  key={post._id}
                  post={post}
                  removeLikeAct={removeLikeAct}
                  addLikeAct={addLikeAct}
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

Posts.propTypes = {
  getPostsAct: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  post: state.post,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    getPostsAct: apiUrl => {
      dispatch(getPostsAct(apiUrl));
    },
    addLikeAct: (apiUrl, postId) => {
      dispatch(addLikeAct(apiUrl, postId));
    },
    removeLikeAct: (apiUrl, postId) => {
      dispatch(removeLikeAct(apiUrl, postId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
