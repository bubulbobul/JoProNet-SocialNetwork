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
  Divider
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
  // console.log(searchWordItem)

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
              <Button icon>
                <Icon name='heart' />
                {likes.length > 1 ? "Likes" : "Like"}
              </Button>
              <Label as='a' basic pointing='left'>
                {likes.length}
              </Label>
            </Button>
            <Button
              as='div'
              labelPosition='right'
              onClick={e => {
                removeLikeAct(apiUrl, _id);
              }}
            >
              <Button icon>
                <Icon name='heartbeat' />
              </Button>
              <Label as='a' basic pointing='left'>
                Dislike
              </Label>
            </Button>
            <Link to={`/post/${_id}`}>
              <Button as='div' labelPosition='right' primary>
                <Button icon color='blue'>
                  <Icon name='comments outline' /> Comment
                </Button>
                <Label basic pointing='left' color='blue'>
                  {comments.length}
                </Label>
              </Button>
            </Link>

            <Header as='h5' color='grey' floated='right'>
              Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>{" "}
            </Header>
            {!auth.loading && user === auth.user._id && (
              <Button
                icon
                color='red'
                floated='right'
                onClick={e => deletePostAct(apiUrl, _id, title, tr)}
              >
                <Icon name='remove' />
              </Button>
            )}
          </Container>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default PostItem;
