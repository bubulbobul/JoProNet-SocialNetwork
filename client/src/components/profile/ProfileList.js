import React, { Fragment } from "react";
import {
  Container,
  List,
  Header,
  Grid,
  Button,
  Segment,
  Icon,
  Image
} from "semantic-ui-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";

const ProfileList = props => {
  const { profile } = props;

  // console.log(profile.AllProfiles.length)
  // console.log(profile)
  return (
    <Fragment>
      {profile && (
        <Segment raised style={{ backgroundColor: "#f4f4f4" }}>
          <Grid>
            <Grid.Column width={3} textAlign='right'>
              <Image src={profile.user.avatar} size='small' circular />
            </Grid.Column>
            <Grid.Column width={7}>
              <Container>
                <Header as='h2'>{profile.user.name.toUpperCase()}</Header>
                <p style={{ color: "#333", fontSize: "1.3rem" }}>
                  {profile.status} at {profile.company}
                  <br />
                  {profile.location}
                </p>
                <Link to={`/profile/${profile.user._id}`}>
                  <Button primary>View Profile</Button>
                </Link>
              </Container>
            </Grid.Column>
            <Grid.Column width={5}>
              <List>
                {profile.skills.slice(0, 5).map((skill, id) => (
                  <List.Item key={id}>
                    <p style={{ color: "#333", fontSize: "1.3rem" }}>
                      <Icon name='checkmark' />
                      {skill}
                    </p>
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
          </Grid>
        </Segment>
      )}
    </Fragment>
  );
};

ProfileList.propTypes = {};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl
});

export default connect(mapStateToProps)(ProfileList);
