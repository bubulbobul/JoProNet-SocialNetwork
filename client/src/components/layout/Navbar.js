import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = ({ isAuthenticated }) => {
  // console.log(isAuthenticated);

  const links = isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />;
  return <React.Fragment>{links}</React.Fragment>;
};

export default Navbar;
