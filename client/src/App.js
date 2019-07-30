import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Welcome from "./components/Welcome";
import Profiles from "./components/profile/Profiles";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
