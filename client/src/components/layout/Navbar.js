import React, { Component } from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    );
  }
}

export default Navbar;
