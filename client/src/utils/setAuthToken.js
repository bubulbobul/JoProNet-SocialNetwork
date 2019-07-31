// A fct that take the token
// If it's there then it will add to the header
// If not it will deleted from the header

import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // This will add the token in the global HEADER
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    // This will remove the token from the global HEADER
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
