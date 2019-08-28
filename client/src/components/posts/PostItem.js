import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {
  Container,
  Header,
  Grid,
  Segment,
  Image,
  Icon,
  Button,
  Label,
  Divider,
  Popup
} from "semantic-ui-react";
import TextTruncate from "react-text-truncate";
import Highlighter from "react-highlight-words";

const PostItem = ({
  removeLikeAct,
  addLikeAct,
  deletePostAct,
  apiUrl,
  auth,
  tr,
  post: { _id, title, text, name, avatar, user, likes, comments, date },
  searchWordItem
}) => {

  return (
    <Segment raised>
      <Grid stackable>
        <Grid.Column width={3}>
          <Container textAlign='center'>
            <Image
              as={Link}
              to={`/profile/${user}`}
              src={avatar}
              circular
              size='small'
              centered
            />
          </Container>
        </Grid.Column>
        <Grid.Column width={12} style={{ paddingTop: "3%" }}>
          <Container textAlign='justified'>
            {
              searchWordItem !== undefined ? (
                <Header>
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
                    searchWords={searchWordItem.split()}
                    autoEscape={true}
                    textToHighlight={title}
                  />
                </Header>
              ) :
                (<Fragment>
                  <Header as={Link} to={`/post/${_id}`}>
                    {title}
                  </Header>
                </Fragment>)
            }
            <Divider />
            {
              searchWordItem !== undefined ? (
                <Highlighter
                  highlightClassName="YourHighlightClass"
                  highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
                  searchWords={searchWordItem.split()}
                  autoEscape={true}
                  textToHighlight={text}
                />
              ) :
                (<Fragment>
                  <TextTruncate
                    line={3}
                    truncateText='…'
                    text={text}
                  />
                </Fragment>)
            }

          </Container>
        </Grid.Column>
        <Grid.Column
          width={3}
          style={{ paddingTop: "0" }}
          verticalAlign='middle'
        >
          <Container textAlign='center'>
            <Link to={`/profile/${user}`}>
              {
                searchWordItem !== undefined ? (
                  <Header>
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
                      searchWords={searchWordItem.split()}
                      autoEscape={true}
                      textToHighlight={name}
                    />
                  </Header>
                ) :
                  (<Fragment>
                    <Header>{name}</Header>
                  </Fragment>)
              }
            </Link>
          </Container>
        </Grid.Column>
        <Grid.Column
          width={12}
          style={{ paddingTop: "0" }}
          verticalAlign='middle'
        >
          <Container textAlign='justified'>
            <Button
              as='div'
              labelPosition='right'
              onClick={e => {
                addLikeAct(apiUrl, _id);
              }}
            >
              <Button icon style={{ borderRadius: "50px 0 0 50px" }}>
                <Icon name='heart' />{" "}
                {likes.length > 1 ? "Likes" : "Like"}
              </Button>
              <Label as='a' basic pointing='left' style={{ borderRadius: "0 50px 50px 0" }}>
                {likes.length}
              </Label>
            </Button>
            <Popup content='Dislike' trigger={
              <Button circular onClick={e => removeLikeAct(apiUrl, _id)} icon='heartbeat' />
            }
            />
            <Link to={`/post/${_id}`}>
              <Popup content='Add a comment' trigger={
                <Button as='div' labelPosition='right' primary>
                  <Button icon color='blue' style={{ borderRadius: "50px 0 0 50px" }}>
                    <Icon name='comments outline' />
                  </Button>
                  <Label basic pointing='left' color='blue' style={{ borderRadius: "0 50px 50px 0" }}>
                    {comments.length}
                  </Label>
                </Button>
              }
              />
            </Link>

            <Header as='h5' color='grey' floated='right'>
              Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>{" "}
            </Header>
            {!auth.loading && user === auth.user._id && (
              <Popup content='Delete' trigger={
                <Button circular onClick={e => deletePostAct(apiUrl, _id, title, tr)} floated='right' icon='remove' color="red" />
              }
              />
            )}
          </Container>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default PostItem;
