import React, { Fragment } from "react";
import { connect } from "react-redux";

import AuthNavbar from "./AuthNavbar";
import GuestNavbar from "./GuestNavbar";

const Navbar = props => {
  return (
    <Fragment>
      {!props.auth.loading && (
        <Fragment>
          {props.auth.isAuthenticated ? <AuthNavbar /> : <GuestNavbar />}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Navbar);
