import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {
  Container,
  Header,
  Grid,
  Segment,
  Image,
  Icon,
  Button
} from "semantic-ui-react";
import Linkify from 'react-linkify';

const CommentItem = ({
  comment: { _id, text, name, avatar, user, date },
  postId,
  deleteCommentAct,
  apiUrl,
  auth,
  history
}) => {
  const componentDecorator = (href, text, key) => {
    return (
      <a href={href} key={key} target="_blank" rel='noopener noreferrer'>
        {text}
      </a>
    )
  };
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
            <Linkify componentDecorator={componentDecorator}>{text}</Linkify>
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
            <Header as='h5' color='grey' floated='right'>
              Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>{" "}
            </Header>
            {!auth.loading && user === auth.user._id && (
              <Button
                circular
                icon
                color='red'
                floated='right'
                onClick={e => deleteCommentAct(apiUrl, postId, _id, history)}
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

export default CommentItem;
