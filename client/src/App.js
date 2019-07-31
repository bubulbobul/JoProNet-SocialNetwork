import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import { getAPIAct } from "./actions/getApiAct";
// Redux
import { connect } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Welcome from "./components/Welcome";
import Profiles from "./components/profile/Profiles";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";

import Loading from "./utils/Loader";
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
    console.log(`useLayoutEffect`);
    props.getAPIAct();
    setRun({
      runApp: true
    });
  }, []);

  const { runApp } = run;

  console.log("localStorage.token", localStorage.token);
  console.log("apiUrl", props.apiUrl);
  console.log("run", run.runApp);
  console.log("props.isAuthenticated", props.isAuthenticated);
  return (
    <Fragment>
      {runApp === false ? (
        <Fragment>
          <Loading />
        </Fragment>
      ) : (
        <BrowserRouter>
          <Fragment>
            <Navbar />
            {props.apiUrl === [] ? (
              <Fragment>
                <Loading />
              </Fragment>
            ) : (
              <Fragment>
                <Switch>
                  <Route exact path='/' component={Welcome} />
                  <Route path='/profiles' component={Profiles} />
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
              </Fragment>
            )}
          </Fragment>
        </BrowserRouter>
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
