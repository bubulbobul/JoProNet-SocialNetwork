import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllPostsAct, addLikeAct, removeLikeAct, deletePostAct, addPostAct } from "../../actions/postAct";
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
import PostsPlaceholder from "./PostsPlaceholder";
import PostsPagination from "./PostsPagination";
import PostsSearch from "./PostsSearch";
import Highlighter from "react-highlight-words";
import { Transition as TransitionSpring, animated } from 'react-spring/renderprops';


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

  const [search, setSearch] = useState({
    searchTerm: "",
    searchResults: []
  });
  const [searchWord, setSearchWord] = useState({
    searchWordItem: ""
  });
  const [loadingSearch, setLoadingsearch] = useState(false);
  const [searching, toggleSearching] = useState(false);
  const { searchResults } = search
  const { searchWordItem } = searchWord

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

  const handleSearchChange = e => {
    setLoadingsearch(true)
    const searchTerm = e.target.value;
    setSearchWord({ searchWordItem: e.target.value })
    const postsSearch = [...posts];

    if (searchTerm !== null || searchTerm !== undefined) {
      toggleSearching(true)
    }

    if (searchTerm === "") {
      toggleSearching(false)
    }

    /** gi means that we want the RegExp to be applied Globally an case Insensitively */
    const regex = new RegExp(searchTerm, 'gi');

    const searchResults = postsSearch.reduce((acc, post) => {
      if ((post.title.match(regex) || post.text.match(regex) || post.name.match(regex))
      ) {
        acc.push(post);
      }

      return acc;
    }, []);

    setSearch({ searchResults });
    setTimeout(() => setLoadingsearch(false), 1000);
  }

  const displaySearchPosts = posts => {

    if (posts.length === 0) {
      return (
        <Header>
          Sorry,
          <Highlighter
            highlightClassName="YourHighlightClass"
            highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
            searchWords={searchWordItem.split()}
            autoEscape={true}
            textToHighlight={searchWordItem}
          />
          is not found.
        </Header>
      )
    }

    return (
      posts.map(post => (
        <PostItem
          key={post._id}
          post={post}
          removeLikeAct={removeLikeAct}
          addLikeAct={addLikeAct}
          auth={auth}
          apiUrl={apiUrl}
          deletePostAct={deletePostAct}
          tr={tr}
          searchWordItem={searchWordItem}
        />
      ))
    )
  }

  const displayPosts = postss => {
    return (
      <Fragment>
        <TransitionSpring
          native
          items={true}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {
            show => show && (props => (
              <animated.div style={props}>
                <Fragment>
                  <Fragment>
                    {
                      postss.map(post => (
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
                      ))
                    }
                  </Fragment>
                  <PostsPagination
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    handlePaginationChange={handlePaginationChange}
                    handleChangePostPerPage={handleChangePostPerPage}
                  />
                </Fragment>
              </animated.div>
            ))
          }
        </TransitionSpring>

      </Fragment>
    )
  }

  const tr = false;

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
          {loading || posts.length === 0 ? (
            <PostsPlaceholder />
          ) : (<Fragment>
            <Fragment>
              <PostsSearch
                handleSearchChange={handleSearchChange}
                loadingSearch={loadingSearch}
              />
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
                posts.length > 0 ? (
                  <Fragment>
                    {searching === false ?
                      displayPosts(currentPosts)
                      :
                      displaySearchPosts(searchResults)
                    }

                  </Fragment>
                ) : (
                    <Header size='huge'>No posts found...</Header>
                  )
              }
            </Fragment>
          </Fragment>)}

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
