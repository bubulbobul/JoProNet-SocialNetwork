import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfileAct } from "../../actions/profileAct";

const Dashboard = props => {
  // useEffect(() => {
  //   console.log("useEffect from Dashboard");
  //   props.getCurrentProfileAct(props.apiUrl);
  // }, []);

  const { apiUrl } = props;

  useEffect(function getCurrentProfil() {
    // 👍 We're not breaking the first rule anymore
    if (apiUrl) {
      props.getCurrentProfileAct(apiUrl);
    }
  }, []);

  console.log("Dashboard.js");

  console.log("props.apiUrl from Dashboard", props.apiUrl);
  console.log("props.apiUrl from Dashboard", apiUrl);
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {
  getCurrentProfileAct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  alerts: state.alert,
  auth: state.auth,
  profile: state.profile
});

const mapDispatchToProps = dispatch => {
  return {
    getCurrentProfileAct: apiUrl => {
      dispatch(getCurrentProfileAct(apiUrl));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
