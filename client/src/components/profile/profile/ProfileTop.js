import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  List,
  Header,
  Grid,
  Button,
  Segment,
  Icon,
  Image,
  Divider
} from "semantic-ui-react";
const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <Fragment>
      <Segment style={{ background: "teal" }}>
        <Divider hidden />
        <Divider hidden />
        <Image src={avatar} size='medium' centered circular />
        <Header
          size='huge'
          as='h1'
          textAlign='center'
          style={{ color: "white" }}
        >
          {name.toUpperCase()}
        </Header>
        <p
          style={{
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center"
          }}
        >
          {status} {company && <span>at {company}</span>}
          <br />
          {location}
        </p>
        <Fragment>
          <Divider hidden />
          <Container textAlign='center'>
            {website && (
              <a href={website} target='_blank'>
                <Icon
                  inverted
                  style={{ color: "white" }}
                  name='globe'
                  size='big'
                />
              </a>
            )}
            {social && social.twitter && (
              <a href={social.twitter} target='_blank'>
                <Icon
                  inverted
                  style={{ color: "white" }}
                  name='twitter'
                  size='big'
                />{" "}
              </a>
            )}
            {social && social.facebook && (
              <a href={social.facebook} target='_blank'>
                <Icon
                  inverted
                  style={{ color: "white" }}
                  name='facebook'
                  size='big'
                />{" "}
              </a>
            )}
            {social && social.youtube && (
              <a href={social.youtube} target='_blank'>
                <Icon
                  inverted
                  style={{ color: "white" }}
                  name='youtube'
                  size='big'
                />{" "}
              </a>
            )}
            {social && social.linkedin && (
              <a href={social.linkedin} target='_blank'>
                <Icon
                  inverted
                  style={{ color: "white" }}
                  name='linkedin'
                  size='big'
                />{" "}
              </a>
            )}
            {social && social.instagram && (
              <a href={social.instagram} target='_blank'>
                <Icon
                  inverted
                  style={{ color: "white" }}
                  name='instagram'
                  size='big'
                />{" "}
              </a>
            )}
          </Container>{" "}
          <Divider hidden />
        </Fragment>
      </Segment>
    </Fragment>
  );
};

export default ProfileTop;
