import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import { getAPIAct } from "./actions/getApiAct";
// Redux
import { connect } from "react-redux";

import "semantic-ui-css/semantic.min.css";
import { Button, Icon } from "semantic-ui-react"

import Navbar from "./components/layout/Navbar";
import Welcome from "./components/Welcome";
import MernStack from "./components/MernStack";
import Footer from "./components/Footer";
import Alerts from "./components/Alert";

import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile/profile-forms/CreateProfile";
import EditProfile from "./components/profile/profile-forms/EditProfile";
import AddExperience from "./components/profile/profile-forms/AddExperience";
import AddEducation from "./components/profile/profile-forms/AddEducation";
import AllProfiles from "./components/profile/AllProfiles";
import ExperienceDetails from "./components/dashboard/experience/ExperienceDetails";
import EducationDetails from "./components/dashboard/education/EducationDetails";
import Profile from "./components/profile/profile/Profile";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/post/SinglePost";

import { WelcomeLoader } from "./utils/Loader";
import setAuthToken from "./utils/setAuthToken";

import ScrollToTop from "react-scroll-up"
import ScrollIntoView from "./ScrollIntoView";

// const api = `http://localhost:5000`;

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ getAPIAct, apiUrl }) => {
  const [run, setRun] = useState({
    runApp: false
  });

  //  useEffect(function getCurrentProfil() {
  //   // 👍 We're not breaking the first rule anymore
  //   if (apiUrl) {
  //     // props.getCurrentProfileAct(apiUrl);
  //     props.getProfileByTheUserIdAct(apiUrl, auth.user._id)
  //   }
  // }, []);

  useEffect(() => {
    getAPIAct();
    setRun({
      runApp: true
    });
  }, []);

  const { runApp } = run;
  return (
    <Fragment>
      {runApp === false ? (
        <Fragment>
          <WelcomeLoader />
        </Fragment>
      ) : (
          <Fragment>
            {apiUrl !== (null || undefined) && (
              <BrowserRouter>
                <Fragment>
                  <Navbar />
                  <Fragment>
                    <Alerts />
                  </Fragment>
                  <ScrollToTop showUnder={150} style={{ zIndex: "10002" }}>
                    <Button icon>
                      <Icon name='angle up' />
                    </Button>
                  </ScrollToTop>
                  <Fragment>
                    <ScrollIntoView>
                      <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route exact path='/mern' component={MernStack} />
                        <Route path='/profiles' component={AllProfiles} />
                        <Route path='/profile/:id' component={Profile} />
                        <PrivateRoute path='/dashboard' component={Dashboard} />
                        <PrivateRoute
                          path='/create-profile'
                          component={CreateProfile}
                        />
                        <PrivateRoute
                          path='/edit-profile'
                          component={EditProfile}
                        />
                        <PrivateRoute
                          path='/add-experience'
                          component={AddExperience}
                        />
                        <PrivateRoute
                          path='/add-education'
                          component={AddEducation}
                        />
                        <PrivateRoute
                          exact
                          path='/experience/:id'
                          component={ExperienceDetails}
                        />
                        <PrivateRoute
                          exact
                          path='/education/:id'
                          component={EducationDetails}
                        />
                        <PrivateRoute path='/posts' component={Posts} />
                        <PrivateRoute path='/post/:id' component={SinglePost} />
                      </Switch>
                    </ScrollIntoView>
                  </Fragment>
                  <Footer />
                </Fragment>
              </BrowserRouter>
            )}
          </Fragment>
        )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    apiUrl: state.apiUrl.apiUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAPIAct: () => {
      dispatch(getAPIAct());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
