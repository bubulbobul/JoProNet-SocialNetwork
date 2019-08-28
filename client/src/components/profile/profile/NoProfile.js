import React, { Fragment } from 'react'
import {
    Header,
    Segment,
    Divider,
    Image,
    Button,
    Popup
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import Monkey from "../../../assets/images/animal-ape-fur-39571.jpg"

const NoProfile = ({ auth, profile: { hasUserProfile }, history }) => {

    const goBack = (history) => {
        history.go(-1);
        // history.goBack();
    }

    return (

        <Fragment>
            <Segment style={{ background: "teal" }}>
                <Divider hidden />
                <Divider hidden />
                <Fragment>
                    <Image src={Monkey} centered style={{ borderRadius: "50%", width: 300, height: 300 }} />
                    <Header
                        size='huge'
                        as='h1'
                        textAlign='center'
                        style={{ color: "white" }}
                    >
                        Hi {auth.user.name.toUpperCase()}
                        <Header.Subheader>
                            Profile not Found
                            </Header.Subheader>
                    </Header>
                    <p>
                        <Popup content='Go Back' trigger={<Button circular onClick={e => goBack(history)} floated='right' icon='chevron left' />} />
                    </p>
                    <Divider hidden />
                    <Divider hidden />
                </Fragment>
            </Segment>
        </Fragment>
    )
}

export default withRouter(NoProfile);
