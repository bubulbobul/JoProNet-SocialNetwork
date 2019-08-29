import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import {
  Segment,
  Divider,
  Image,
  Container,
  Header,
  Grid
} from "semantic-ui-react";
import Carousel from "nuka-carousel";

import JoinUs from "./auth/JoinUs";

import Coding1 from "../assets/images/coding-1.jpg";
import AnimalMonkey from "../assets/images/animal-ape-fur-39571.jpg";
import HtmlCss from "../assets/images/design-development-electronics-326424.jpg";
import CodingCoffee from "../assets/images/blurred-background-coffee-cup-contemporary-908284.jpg";
import BumpCollaboration from "../assets/images/bump-collaboration-colleagues-1068523.jpg";
import Office from "../assets/images/architectural-design-architecture-ceiling-380768.jpg";
import MernLogo from "../assets/images/mern.jpeg";
import Bubulbobul from "../assets/images/bubulbobul.jpg";

import Cloud from "../assets/welcomeImg/cloud.svg"
import Earth from "../assets/welcomeImg/earth.svg"
import Satellite from "../assets/welcomeImg/satellite4.svg"
import Team from "../assets/welcomeImg/team.png"

const Welcome = () => {
  const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

  return (
    <Fragment>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Segment style={{ background: "#233237", margin: "0", padding: "0 0 35vw 0" }} raised>
          <Fragment>
            <Parallax pages={3}>
              <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
              <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

              <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

              <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={Satellite} style={{ width: '15%', marginLeft: '70%' }} alt="Satellite" />
              </ParallaxLayer>

              <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={Cloud} alt="Cloud" style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>

              <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <img src={Earth} alt="Earth" style={{ width: '60%' }} />
              </ParallaxLayer>

              <ParallaxLayer
                offset={2}
                speed={-0.3}
                style={{
                  backgroundSize: '80%',
                  backgroundPosition: 'center'
                }}
              />

              <ParallaxLayer
                offset={0}
                speed={0.1}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container style={{ padding: "0 10% 0 10%", marginTop: "-170px" }}>
                  <JoinUs />
                </Container>
              </ParallaxLayer>

              <ParallaxLayer
                offset={1}
                speed={0.1}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Fragment>
                  <Container textAlign='center'>
                    <Grid textAlign="center">
                      <Grid.Row>
                        <Segment style={{ width: '50%', textAlign: 'center' }}>
                          <Carousel
                            cellAlign='center'
                            autoGenerateStyleTag={true}
                            autoplay={true}
                            pauseOnHover={true}
                            width='100%'
                            height='20vw'
                            wrapAround={true}
                          >
                            <Image src={MernLogo} />
                            <Image src={Coding1} />
                            <Image src={CodingCoffee} />
                            <Image src={BumpCollaboration} />
                            <Image src={Office} />
                            <Image src={HtmlCss} />
                            <Image src={AnimalMonkey} />
                            <Image src={Bubulbobul} />
                          </Carousel>
                        </Segment>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </Fragment>
              </ParallaxLayer>

              <ParallaxLayer
                offset={2}
                speed={-0}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Container textAlign="center">
                  <Header as={Link} to="/profiles" size="huge" style={{ color: "white" }}>We have a large <br />community</Header><br />
                  <Image as={Link} to="/profiles" src={Team} circular size="medium" centered style={{ marginRight: "0px" }} />
                </Container>
              </ParallaxLayer>
            </Parallax>
          </Fragment>
        </Segment>
      </Container>
      <Divider hidden />
      <Divider hidden />
    </Fragment>
  )
}

export default Welcome;
