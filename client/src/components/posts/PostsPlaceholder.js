import React, { Fragment } from 'react'
import {
    Segment,
    Grid,
    Placeholder,
    Button
} from "semantic-ui-react";
const PostsPlacehoder = () => {
    return (
        <Fragment>
            <Fragment>
                <Grid columns={5}>
                    <Grid.Row>
                        <Grid.Column>
                            <Placeholder>
                                <Placeholder.Header>
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
                <Segment raised>
                    <Grid>
                        <Grid.Column width={7}>
                            <Placeholder>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Placeholder>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment raised>
                    <Grid>
                        <Grid.Column width={7}>
                            <Placeholder>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Placeholder>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment raised>
                    <Grid>
                        <Grid.Column width={7}>
                            <Placeholder>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Placeholder>
                                <Placeholder.Paragraph>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Paragraph>
                            </Placeholder>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Fragment>
        </Fragment >
    )
}

export default PostsPlacehoder;
