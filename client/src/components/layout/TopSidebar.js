import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentProfileAct } from "../../actions/profileAct";
import { Link, withRouter, Redirect } from "react-router-dom";
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
import "semantic-ui-css/semantic.min.css";
import { logoutAct } from "../../actions/authAct";
import { LoadingProfile } from "../../utils/Loader";

const TopSidebar = props => {
  const { apiUrl, auth } = props;

  useEffect(function getCurrentProfil() {
    // 👍 We're not breaking the first rule anymore
    console.log("useEffect");
    if (apiUrl) {
      props.getCurrentProfileAct(apiUrl);
    }
  }, []);

  const handleLogout = () => {
    props.logoutAct(props.history, true);
  };

  console.log(auth);
  console.log(auth.user);
  // console.log(auth.user.name);

  return auth.user === null ||
    auth.user.email === null ||
    auth.user.avatar === null ? (
    <LoadingProfile />
  ) : (
    <Fragment>
      <Fragment>
        <Sidebar as={Segment} inverted direction='top' width='wide' visible>
          <Container>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column width={14}>
                  <Header as='h5' inverted>
                    <Image circular src={auth.user.avatar} avatar />{" "}
                    {auth.user.name.toUpperCase()}
                  </Header>
                </Grid.Column>
                <Grid.Column width={2}>
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
