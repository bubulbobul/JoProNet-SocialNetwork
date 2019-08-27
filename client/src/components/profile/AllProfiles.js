import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AllProfilePlaceholder from "./AllProfilePlaceholder"
import { getAllProfilesAct } from "../../actions/profileAct";
import {
  Container,
  Segment,
  Divider,
  Header,
  Grid,
  Icon,
} from "semantic-ui-react";
import ProfileList from "./ProfileList";
import ProfilesPagination from "./ProfilesPagination";
import SearchProfiles from "./SearchProfiles";
import Highlighter from "react-highlight-words";

const AllProfiles = ({ apiUrl, getAllProfilesAct, profile: { allProfiles, profileLoading } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage, setProfilesPerPage] = useState(5);
  const [search, setSearch] = useState({
    searchResults: []
  });
  const [searchWord, setSearchWord] = useState({
    searchWordItem: ""
  });
  const [loadingSearch, setLoadingsearch] = useState(false);
  const [searching, toggleSearching] = useState(false);
  const { searchResults } = search
  const { searchWordItem } = searchWord

  useEffect(() => {
    getAllProfilesAct(apiUrl);
  }, []);


  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = allProfiles.slice(indexOfFirstProfile, indexOfLastProfile);

  const handlePaginationChange = (e, pageInfo) => {
    // console.log(pageInfo)
    setCurrentPage(pageInfo.activePage)
  }

  const handleChangeProfilePerPage = (e, number) => {
    setProfilesPerPage(number.value)
    window.scrollTo(0, 0)
  }

  const handleSearchChange = e => {
    setLoadingsearch(true)
    const searchTerm = e.target.value;
    setSearchWord({ searchWordItem: e.target.value })
    const profiles = [...allProfiles];

    if (searchTerm !== null || searchTerm !== undefined) {
      toggleSearching(true)
    }

    if (searchTerm === "") {
      toggleSearching(false)
    }

    // console.log(searchTerm)
    // console.log(searchTerm.split())
    // console.log(searchTerm.split().length)
    // console.log(typeof (searchTerm))
    // console.log(searching)

    /** gi means that we want the RegExp to be applied Globally an case Insensitively */
    const regex = new RegExp(searchTerm, 'gi');

    const searchResults = profiles.reduce((acc, profile) => {
      if ((profile.user.name && profile.user.name.match(regex)) ||
        (profile.skills.toString().match(regex)) ||
        (profile.company && profile.company.match(regex)) ||
        (profile.status.match(regex)) ||
        (profile.location && profile.location.match(regex))
      ) {
        acc.push(profile);
      }

      return acc;
    }, []);

    setSearch({ searchResults });
    setTimeout(() => setLoadingsearch(false), 1000);
  }

  const displaySearchProfiles = profiles => {
    // console.log("displaySearchProfiles")

    if (profiles.length === 0) {
      return (
        <Header>
          Sorry,
          <Highlighter
            highlightClassName="YourHighlightClass"
            highlightStyle={{ background: "#e2c08d", padding: "0 5px", borderRadius: "5px" }}
            searchWords={searchWordItem.split()}
            autoEscape={true}
            textToHighlight={searchWordItem}
          />
          is not found.
        </Header>
      )
    }

    return (
      profiles.map(profile => (
        <ProfileList key={profile._id} profile={profile} searchWordItem={searchWordItem} />
      ))
    )


  }

  const displayProfiles = profiles => {
    // console.log("displayProfiles")
    return (
      <Fragment>
        <Fragment>
          {
            profiles.map(profile => (
              <ProfileList key={profile._id} profile={profile} />
            ))
          }
        </Fragment>
        <ProfilesPagination
          currentPage={currentPage}
          profilePerPage={profilesPerPage}
          totalProfiles={allProfiles.length}
          handlePaginationChange={handlePaginationChange}
          handleChangeProfilePerPage={handleChangeProfilePerPage}
        />
      </Fragment>
    )
  }

  // console.log(searchWordItem)
  // console.log(search.searchResults)

  return (
    <Fragment>
      <Fragment>
        <Container>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Segment>
            {profileLoading || allProfiles.length === 0 ? (
              <AllProfilePlaceholder />
            ) : (
                <Fragment>
                  <Fragment>
                    <SearchProfiles
                      handleSearchChange={handleSearchChange}
                      loadingSearch={loadingSearch}
                    />
                    <Grid columns='equal'>
                      <Grid.Column>
                        <Header as='h1' color='blue'>
                          Keep Connecting
                        </Header>
                      </Grid.Column>
                    </Grid>
                    <Grid columns='equal'>
                      <Grid.Column>
                        <Header as='h3'>
                          <Icon name='connectdevelop' />
                          <Header.Content>
                            Browse and connect with our members
                      </Header.Content>
                        </Header>
                      </Grid.Column>
                    </Grid>
                  </Fragment>
                  <Divider hidden />
                  <Fragment>
                  </Fragment>
                  {allProfiles.length > 0 ? (
                    <Fragment>
                      {searching === false ?
                        displayProfiles(currentProfiles)
                        :
                        displaySearchProfiles(searchResults)
                      }
                    </Fragment>
                  ) : (
                      <Header size='huge'>No profiles found...</Header>
                    )}
                </Fragment>
              )}
          </Segment>
        </Container>
      </Fragment>
      <Divider hidden />
    </Fragment>
  );
};

AllProfiles.propTypes = {
  getAllProfilesAct: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apiUrl: state.apiUrl.apiUrl,
  profile: state.profile
});

const mapDispatchToProps = dispatch => {
  return {
    getAllProfilesAct: apiUrl => {
      dispatch(getAllProfilesAct(apiUrl));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProfiles);
