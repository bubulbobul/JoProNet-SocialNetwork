import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { getAPIAct } from "./actions/getApiAct";

// Redux
import { connect } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Welcome from "./components/Welcome";
import Profiles from "./components/profile/Profiles";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Loading from "./utils/Loader";

// const api = `http://localhost:5000`;

class App extends React.Component {
  componentWillMount() {
    // console.log("componentWillMount");
    this.props.getAPIAct();
  }
  render() {
    // console.log("apiUrl", this.props.apiUrl);
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          {this.props.apiUrl === [] ? (
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
              </Switch>
            </Fragment>
          )}
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiUrl: state.apiUrl
  };
};

export default connect(
  mapStateToProps,
  { getAPIAct }
)(App);
