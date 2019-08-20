import React, { Fragment } from "react";
import {
  Container,
  Header,
  Segment,
  Icon,
  Divider,
  List
} from "semantic-ui-react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    languages,
    user: { name }
  }
}) => {
  return (
    <Fragment>
      <Segment style={{ background: "#f4f4f4" }}>
        <Fragment>
          {bio && (
            <Container textAlign='center'>
              <Header color='teal'>{name.trim().split(" ")[0]}'s Bio</Header>
              <p>{bio}</p>
            </Container>
          )}
        </Fragment>
        <Fragment>
          {skills && (
            <Fragment>
              <Divider hidden />
              <Divider />
              <Divider hidden />

              <Container textAlign='center'>
                <Header color='teal'>Skill Set</Header>
                <List horizontal>
                  {skills.map((skill, id) => {
                    return (
                      <List.Item key={id}>
                        <List.Content>
                          <Icon name='checkmark' />
                          {skill.toUpperCase()}
                        </List.Content>
                      </List.Item>
                    );
                  })}
                </List>
              </Container>
            </Fragment>
          )}
        </Fragment>
        <Fragment>
          {languages.length > 1 && (
            <Fragment>
              <Divider hidden />
              <Divider />
              <Divider hidden />
              <Container textAlign='center'>
                <Header color='teal'>Spoken Languages</Header>
                <List horizontal>
                  {languages.map((language, id) => {
                    return (
                      <List.Item key={id}>
                        <List.Content>
                          <Icon name='thumbs up' />
                          {language.toUpperCase()}
                        </List.Content>
                      </List.Item>
                    );
                  })}
                </List>
              </Container>
            </Fragment>
          )}
        </Fragment>
      </Segment>
    </Fragment>
  );
};

export default ProfileAbout;
