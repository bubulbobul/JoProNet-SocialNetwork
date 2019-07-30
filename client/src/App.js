import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Welcome from "./components/Welcome";
import Profiles from "./components/profile/Profiles";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Fragment>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/profiles' component={Profiles} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Fragment>
    </Fragment>
  </BrowserRouter>
);

export default App;
