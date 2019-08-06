import React from "react";
import PropTypes from "prop-types";
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

const PostItem = ({
  removeLikeAct,
  addLikeAct,
  apiUrl,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => {
  console.log("dddddddddd", likes);
  return (
    <Segment raised>
      <Grid>
        <Grid.Column width={3}>
          <Container textAlign='center'>
            <Image src={avatar} circular size='small' />
          </Container>
        </Grid.Column>
        <Grid.Column width={12} style={{ paddingTop: "3%" }}>
          <Container textAlign='justified'>
            <p>{text}</p>
          </Container>
        </Grid.Column>
        <Grid.Column
          width={3}
          style={{ paddingTop: "0" }}
          verticalAlign='middle'
        >
          <Container textAlign='center'>
            <Header>{name}</Header>
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
              onClick={e => addLikeAct(apiUrl, _id)}
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
              onClick={e => removeLikeAct(apiUrl, _id)}
            >
              <Button icon>
                <Icon name='heartbeat' />
              </Button>
              <Label as='a' basic pointing='left'>
                Dislike
              </Label>
            </Button>
            <Link to='/post'>
              <Button as='div' labelPosition='right'>
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
              <Button icon color='red' floated='right'>
                <Icon name='remove' />
              </Button>
            )}
          </Container>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

// PostItem.propTypes = {
//   post: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired
// };

export default PostItem;
