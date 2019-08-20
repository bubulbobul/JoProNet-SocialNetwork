import React, { Fragment, useState } from "react";
import {
  List,
  Segment,
  Divider,
  Header,
  Grid,
  Image,
  Container
} from "semantic-ui-react";
import Logo from "../assets/images/logo.jpg";

import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";

const TopSidebar = () => {
  const [privacyPolicy, togglePrivacyPlicy] = useState(false);
  const [termsConditions, toggleTermsConditions] = useState(false);
  return (
    <Fragment>
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Info' />
              <List link inverted>
                <List.Item
                  as='a'
                  href='https://github.com/bubulbobul'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About Us
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Contact Us' />
              <List link inverted>
                <List.Item as='a'>windam@live.fr</List.Item>
                <List.Item as='a'>+91 80506 01446</List.Item>
                <List.Item as='a'>Bangalore</List.Item>
                <List.Item as='a'>India</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Company' />
              <List link inverted>
                <List.Item
                  as='a'
                  href='https://seyfertsoft.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Seyfert Soft
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Developped by' />
              <p>
                Djimi Windam full stack in React, Redux, Node, Express and Mongo
                db.
              </p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image
            centered
            size='tiny'
            src={Logo}
            style={{ background: "white", borderRadius: "10px" }}
          />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a'
              onClick={() => toggleTermsConditions(!termsConditions)}>
              Terms and Conditions
              <TermsConditions termsConditions={termsConditions} />
            </List.Item>
            <List.Item
              as='a'
              onClick={() => togglePrivacyPlicy(!privacyPolicy)}
            >
              Privacy Policy
              <PrivacyPolicy privacyPolicy={privacyPolicy} />
            </List.Item>
          </List>
          <br />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a'>
              JoProNet &copy; 2019 All Rights Reserved
            </List.Item>
          </List>
        </Container>
      </Segment>
    </Fragment>
  );
};

export default TopSidebar;
