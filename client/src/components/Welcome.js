import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Carousel from "semantic-ui-carousel-react";
import {
  Image,
  Container,
  Segment,
  Divider,
  Header,
  Grid
} from "semantic-ui-react";
import Logo from "../assets/images/logo.jpg";
import MernLogo from "../assets/images/mern.jpeg";
import MongodbIcon from "../assets/images/mongodb-icon.jpg";
import ExpressJsLogo from "../assets/images/express.png";
import ReactLogo from "../assets/images/react.png";
import NodeJsLogo from "../assets/images/nodejs.png";

const Welcome = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  let elements = [
    {
      render: () => {
        return <Image src={MernLogo} />;
      }
    },
    {
      render: () => {
        return <Image src='https://i.imgur.com/0eRe75Y.jpg' />;
      }
    },
    {
      render: () => {
        return (
          <Image src='https://flipwallpapers.com/wallpapers/anime-wallpaper-hd-resolution-For-desktop-Wallpaper.jpg' />
        );
      }
    }
  ];

  return (
    <Fragment>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Fragment>
          <Carousel
            raised
            elements={elements}
            duration={3000}
            animation='fade'
            showNextPrev={false}
            showIndicators={false}
          />
        </Fragment>

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Segment raised>
                <Container textAlign='center'>
                  <Image circular src={Logo} size='small' centered />
                  <Header as='h2'>Welcome to JoProNet</Header>
                </Container>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <Container textAlign='justified'>
                  <p style={{ color: "#333", fontSize: "1.3rem" }}>
                    JoProNet stands for Job Professional Network is a Social
                    Media Network for developers who intend to share their
                    knowledge and experience with each other and allow the users
                    to show their aptitute to each other especially for
                    employers.
                  </p>
                  <p style={{ color: "#333", fontSize: "1.3rem" }}>
                    A community is present and exchange about the new upcoming
                    technologies which will raised the programmers facilities
                  </p>
                </Container>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment>
          <Header>This apps is a MERN stack application in</Header>
          <Header>
            <Image circular src={MongodbIcon} centered /> Mongodb
          </Header>
          <Header>
            <Image circular src={ExpressJsLogo} centered /> Express Js Server
          </Header>
          <Header>
            <Image circular src={ReactLogo} centered /> React JS
          </Header>
          <Header>
            <Image circular src={NodeJsLogo} centered /> Node JS
          </Header>
        </Segment>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </Container>
    </Fragment>
  );
};

Welcome.protoTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Welcome);

{
  /*  */
}
