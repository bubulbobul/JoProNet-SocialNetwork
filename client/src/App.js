import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import { getAPIAct } from "./actions/getApiAct";
// Redux
import { connect } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Welcome from "./components/Welcome";
import Developers from "./components/profile/Developers";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile/profile-forms/CreateProfile";
import EditProfile from "./components/profile/profile-forms/EditProfile";
import AddExperience from "./components/profile/profile-forms/AddExperience";
import AddEducation from "./components/profile/profile-forms/AddEducation";

import { Loading } from "./utils/Loader";
import setAuthToken from "./utils/setAuthToken";

// const api = `http://localhost:5000`;

if (localStorage.token) {
  setAuthToken(localStorage.token);
  // console.log("localStorage.token", localStorage.token);
}

const App = props => {
  const [run, setRun] = useState({
    runApp: false
  });

  useEffect(() => {
    // console.log(`useEffect`);
    props.getAPIAct();
    setRun({
      runApp: true
    });
  }, []);

  const { runApp } = run;
  const { apiUrl } = props;
  // console.log("localStorage.token", localStorage.token);
  console.log("apiUrl", props.apiUrl);
  // console.log("run", run.runApp);
  // console.log("props.isAuthenticated", props.isAuthenticated);
  console.log("App.js");
  return (
    <Fragment>
      {runApp === false ? (
        <Fragment>
          <Loading />
        </Fragment>
      ) : (
        <Fragment>
          {apiUrl !== (null || undefined) && (
            <BrowserRouter>
              <Fragment>
                <Navbar />
                <Fragment>
                  <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/developers' component={Developers} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
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
                  </Switch>
                </Fragment>
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
