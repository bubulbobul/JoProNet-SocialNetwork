import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getGithubReposAct } from "../../../actions/profileAct";
// import { LoaderInlineCentered } from "../../../utils/Loader";
import { Segment, Header, Grid, Icon, Divider } from "semantic-ui-react";
// @ import a loader

const ProfileGithub = ({ username, apiUrl, getGithubReposAct, repos }) => {
  useEffect(() => {
    getGithubReposAct(apiUrl, username);
  }, []);

  return (
    <Fragment>
      {repos === null ? (
        // <LoaderInlineCentered />
        <p>Loading</p>
      ) : (
        <Fragment>
          {repos.map(repo => {
            return (
              <Segment key={repo.id} raised>
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Header>
                        <a href={repo.html_url} target='_blank'>
                          {repo.name}
                        </a>
                      </Header>
                      <p>{repo.description}</p>
                    </Grid.Column>
                  </Grid.Row>{" "}
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Divider />
                      <Segment size='mini'>
                        <Header as='h4'>
                          <Icon name='star' />
                          <Header.Content>
                            Stars {repo.stargazers_count}
                          </Header.Content>
                        </Header>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Divider />
                      <Segment size='mini'>
                        <Header as='h4'>
                          <Icon name='binoculars' colo='teal' />
                          <Header.Content>
                            Watchers {repo.watchers_count}
                          </Header.Content>
                        </Header>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <Divider />
                      <Segment size='mini'>
                        <Header as='h4'>
                          <Icon name='fork' colo='teal' />
                          <Header.Content>
                            Forks {repo.forks_count}
                          </Header.Content>
                        </Header>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            );
          })}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    apiUrl: state.apiUrl.apiUrl,
    repos: state.profile.repos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getGithubReposAct: (apiUrl, username) => {
      dispatch(getGithubReposAct(apiUrl, username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileGithub);
