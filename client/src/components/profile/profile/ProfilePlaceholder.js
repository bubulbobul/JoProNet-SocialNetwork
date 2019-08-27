import React, { Fragment } from 'react'
import {
    Segment,
    Grid,
    Placeholder,
    Button,
    Image
} from "semantic-ui-react";
const ProfilePlaceholder = () => {
    return (
        <Fragment>
            <Fragment>
                <Grid columns={6}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Placeholder style={{ borderRadius: '5px', }}>
                                <Placeholder.Header as={Button} floated="left">
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column />
                        <Grid.Column />
                        <Grid.Column />
                        <Grid.Column>
                            <Placeholder style={{ borderRadius: '5px', }}>
                                <Placeholder.Header as={Button} floated="right">
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                            </Placeholder>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Segment style={{ background: "teal" }}>
                    <Grid>
                        <Grid.Row centered>
                            <Placeholder as={Image} style={{ height: 300, width: 300, borderRadius: '50%', }}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Grid.Row>
                        <Grid.Row centered verticalAlign="top">
                            <Placeholder style={{ width: 150, borderRadius: '5px' }}>
                                <Placeholder.Header as={Button}>
                                    <Placeholder.Line />
                                </Placeholder.Header>
                            </Placeholder>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Placeholder as={Image} style={{ height: 30, width: 30, margin: "0 5px", borderRadius: '50%', display: "none" }}>
                                <Placeholder.Image />
                            </Placeholder>
                            <Placeholder as={Image} style={{ height: 30, width: 30, margin: "0 5px", borderRadius: '50%' }}>
                                <Placeholder.Image />
                            </Placeholder>
                            <Placeholder as={Image} style={{ height: 30, width: 30, margin: "0 5px", borderRadius: '50%' }}>
                                <Placeholder.Image />
                            </Placeholder>
                            <Placeholder as={Image} style={{ height: 30, width: 30, margin: "0 5px", borderRadius: '50%' }}>
                                <Placeholder.Image />
                            </Placeholder>
                            <Placeholder as={Image} style={{ height: 30, width: 30, margin: "0 5px", borderRadius: '50%' }}>
                                <Placeholder.Image />
                            </Placeholder>
                            <Placeholder as={Image} style={{ height: 30, width: 30, margin: "0 5px", borderRadius: '50%' }}>
                                <Placeholder.Image />
                            </Placeholder>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Fragment>
        </Fragment >
    )
}

export default ProfilePlaceholder
