import React, { useState } from "react";
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
  Label
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TextTruncate from "react-text-truncate";

const PostItem = ({
  // isAlreadyLiked,
  removeLikeAct,
  addLikeAct,
  deletePostAct,
  apiUrl,
  auth,
  post: { _id, title, text, name, avatar, user, likes, comments, date }
}) => {
  const [likeDisabled, toggleLikeDisabled] = useState(false);

  // console.log(likes.user);
  // console.log(likes);

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
            {title && <Header>{title}</Header>}
            <TextTruncate
              line={3}
              element='span'
              truncateText='…'
              text={text}
            />
          </Container>
        </Grid.Column>
        <Grid.Column
          width={3}
          style={{ paddingTop: "0" }}
          verticalAlign='middle'
        >
          <Container textAlign='center'>
            <Link to={`/profile/${user}`}>
              <Header>{name}</Header>
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
                toggleLikeDisabled(!likeDisabled);
              }}
              disabled={likeDisabled ? true : false}
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
              disabled={likeDisabled ? false : true}
              onClick={e => {
                removeLikeAct(apiUrl, _id);
                toggleLikeDisabled(!likeDisabled);
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
                <Button icon>
                  <Icon name='comments outline' />
                  Comment
                </Button>{" "}
                <Label basic pointing='left'>
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
                onClick={e => deletePostAct(apiUrl, _id, title)}
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
