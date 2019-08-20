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
import Coding1 from "../assets/images/coding-1.jpg";
import AnimalMonkey from "../assets/images/animal-ape-fur-39571.jpg";
import HtmlCss from "../assets/images/design-development-electronics-326424.jpg";
import CodingCoffee from "../assets/images/blurred-background-coffee-cup-contemporary-908284.jpg";
import BumpCollaboration from "../assets/images/bump-collaboration-colleagues-1068523.jpg";
import Office from "../assets/images/architectural-design-architecture-ceiling-380768.jpg";
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
        return <Image src={Coding1} />;
      }
    },
    {
      render: () => {
        return <Image src={CodingCoffee} />;
      }
    },
    {
      render: () => {
        return <Image src={BumpCollaboration} />;
      }
    },
    {
      render: () => {
        return <Image src={Office} />;
      }
    },
    {
      render: () => {
        return <Image src={HtmlCss} />;
      }
    },
    {
      render: () => {
        return <Image src={AnimalMonkey} />;
      }
    }
  ];

  return (
    <Fragment>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Fragment>
          <Container textAlign='center'>
            <Carousel
              elements={elements}
              duration={3000}
              animation='fade'
              showNextPrev={true}
              showIndicators={true}
            />
          </Container>
        </Fragment>
        <Segment>
          <Container textAlign='center'>
            <Image circular src={Logo} size='small' centered />
            <Header as='h2'>Welcome to JoProNet</Header>
          </Container>
        </Segment>

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Segment raised>
                <Container textAlign='justified'>
                  <Header>What is JoProNet ?</Header>
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
              <Segment raised>
                <Grid columns={4} verticalAlign='middle' textAlign='center'>
                  <Grid.Row>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <Header textAlign='center'>
                          <Image avatar src={MongodbIcon} centered />
                        </Header>
                      </Container>
                    </Grid.Column>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <Header textAlign='center'>
                          <Image avatar src={ExpressJsLogo} centered />
                        </Header>
                      </Container>
                    </Grid.Column>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <Header textAlign='center'>
                          <Image avatar src={ReactLogo} centered />
                        </Header>
                      </Container>
                    </Grid.Column>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <Header textAlign='center'>
                          <Image avatar src={NodeJsLogo} centered />
                        </Header>
                      </Container>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <Header textAlign='center'>Mongodb</Header>
                      </Container>
                    </Grid.Column>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <Header textAlign='center'>Express JS</Header>
                      </Container>
                    </Grid.Column>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <Header textAlign='center'>ReactJS</Header>
                      </Container>
                    </Grid.Column>
                    <Grid.Column>
                      <Container textAlign='center'>
                        <Header textAlign='center'>NodeJS</Header>
                      </Container>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <Container textAlign='justified'>
                  <Header>How JoProNet Has been developped ?</Header>
                  <p style={{ color: "#333", fontSize: "1.3rem" }}>
                    JoProNet is a MERN (Mongodb, Express, React, Node)stack
                    application i.e it's an web application developped with
                    mongodb as database collection storage to store our data,
                    Express JS is a light-weight web application framework to
                    help organize your web application create easily web api.
                    React JS is a framwork or to be more specific is one of the
                    most JavaScript Library used for the front-end development
                    it allows us to reuse component React can be used as a base
                    in the development of single-page or mobile applications.
                  </p>
                  <br />
                  <p style={{ color: "#333", fontSize: "1.3rem" }}>
                    And Node.js is an open source server environment it allows
                    to run JavaScript in the system
                  </p>
                </Container>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Segment raised>
                <Header>This apps is a MERN stack application in</Header>
                <Header>
                  <Image circular src={MongodbIcon} centered /> Mongodb
                </Header>
                <Header>
                  <Image circular src={ExpressJsLogo} centered /> Express Js
                  Server
                </Header>
                <Header>
                  <Image circular src={ReactLogo} centered /> React JS
                </Header>
                <Header>
                  <Image circular src={NodeJsLogo} centered /> Node JS
                </Header>
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

        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        {/* <BottomSidebar /> */}
      </Container>

      {/* <Footer /> */}
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
