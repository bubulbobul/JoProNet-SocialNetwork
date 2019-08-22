import React, { Fragment } from "react";
import { Header, Container, Icon, Grid } from "semantic-ui-react";

const ProfileContactMe = ({ shownumber, showworkingemail, workingemail, number, area, country }) => {
    // console.log(props)
    return (
        <Fragment>
            <Container textAlign='justified'>
                <Header color='teal'>Info</Header>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Fragment>
                                {country && (
                                    <Header as='h4'>
                                        <Icon name='globe' />
                                        <Header.Content>From: {country}</Header.Content>
                                    </Header>
                                )}
                            </Fragment>
                        </Grid.Column>
                        <Grid.Column>
                            <Fragment>
                                {area && (
                                    <Header as='h4'>
                                        <Icon name='map' />
                                        <Header.Content>Locality: {area}</Header.Content>
                                    </Header>
                                )}
                            </Fragment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Fragment>
                                {showworkingemail === true && (
                                    <Header as='h4'>
                                        <Icon name='mail' />
                                        <Header.Content>Email: {workingemail}</Header.Content>
                                    </Header>
                                )}
                            </Fragment>
                        </Grid.Column>
                        <Grid.Column>
                            <Fragment>
                                {shownumber === true && (
                                    <Header as='h4'>
                                        <Icon name='phone square' />
                                        <Header.Content>Phone number: {number}</Header.Content>
                                    </Header>
                                )}
                            </Fragment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default ProfileContactMe
