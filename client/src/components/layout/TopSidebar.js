import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentProfileAct } from "../../actions/profileAct";
import { withRouter, Link } from "react-router-dom";
import {
  Sidebar,
  Segment,
  Divider,
  Header,
  Image,
  Grid,
  Button,
  Icon,
  Container
} from "semantic-ui-react";
import { logoutAct } from "../../actions/authAct";
import { MainLoader } from "../../utils/Loader";

const TopSidebar = props => {
  const { apiUrl, auth } = props;

  useEffect(function getCurrentProfil() {
    // 👍 We're not breaking the first rule anymore
    if (apiUrl) {
      props.getCurrentProfileAct(apiUrl);
    }
  }, []);

  const handleLogout = () => {
    props.logoutAct(props.history, true);
  };

  return auth.user === null ||
    auth.user.email === null ||
    auth.user.avatar === null ? (
      <MainLoader />
    ) : (
      <Fragment>
        <Fragment>
          <Sidebar as={Segment} inverted direction='top' width='wide' visible>
            <Container>
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column width={14}>
                    <Header as='h4' inverted>
                      <Header
                        as={Link}
                        to={`/profile/${auth.user._id}`}
                        size='tiny'
                        inverted
                      >
                        <Image circular src={auth.user.avatar} avatar />{" "}
                        {auth.user.name.toUpperCase()}
                      </Header>
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={2} floated='right'>
                    <Button
                      animated='fade'
                      floated='right'
                      onClick={handleLogout}
                      color='red'
                    >
                      <Button.Content hidden>LOGOUT</Button.Content>
                      <Button.Content visible>
                        <Icon name='sign-out' />
                      </Button.Content>
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Sidebar>
        </Fragment>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </Fragment>
    );
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    getCurrentProfileAct: apiUrl => {
      dispatch(getCurrentProfileAct(apiUrl));
    },
    logoutAct: (history, tr) => {
      dispatch(logoutAct(history, tr));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopSidebar));
