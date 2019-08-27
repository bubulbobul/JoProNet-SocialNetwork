import React, { Fragment } from 'react'
import {
    Header,
    Segment,
    Divider,
    Image
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Monkey from "../../../assets/images/animal-ape-fur-39571.jpg"

const NoProfile = ({ auth: { user: { name } } }) => {
    return (

        <Fragment>
            <Segment style={{ background: "teal" }}>
                <Divider hidden />
                <Divider hidden />
                <Image src={Monkey} centered style={{ borderRadius: "50%", width: 300, height: 300 }} />
                <Header
                    size='huge'
                    as='h1'
                    textAlign='center'
                    style={{ color: "white" }}
                >
                    Hi {name.toUpperCase()}
                </Header>
                <p
                    style={{
                        color: "white",
                        fontSize: "1.5rem",
                        textAlign: "center"
                    }}
                >
                    You did not create your profile, let's go <Link to="/create-profile" style={{ color: "black" }}>Click Here</Link>
                </p>
            </Segment>
        </Fragment>
    )
}

export default NoProfile
