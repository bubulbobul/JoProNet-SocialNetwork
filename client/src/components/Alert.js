import React, { Fragment, useState } from 'react'
import { connect } from "react-redux";
import { Transition as TransitionSpring, animated } from 'react-spring/renderprops';
import { Message, Divider, Container } from 'semantic-ui-react'

const Alerts = ({ alerts }) => {
    const [visible, setVisible] = useState(true)

    const handleDismiss = () => {
        setVisible(false)

        setTimeout(() => {
            setVisible(true)
        }, 3000)
    }
    return (
        <Fragment>
            <TransitionSpring
                native
                items={true}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                config={{ delay: 1000 }}
            >
                {
                    show => show && (props => (
                        <animated.div style={props}>
                            <Fragment>
                                {alerts !== null &&
                                    alerts.length > 0 &&
                                    alerts.map(alert => (
                                        <Fragment key={alert.id}>
                                            <Divider hidden />
                                            <Divider hidden />
                                            <Divider hidden />
                                            <Divider hidden />
                                            <Divider hidden />
                                            <Container style={{ position: "relative" }}>
                                                {alert.alertType === "success" && visible === true && (
                                                    <Message
                                                        positive
                                                        onDismiss={e => handleDismiss(e)}
                                                        style={{ zIndex: "100005", position: "fixed", padding: "0 50px" }}
                                                    >
                                                        <Message.Header>{alert.msgHeader}</Message.Header>
                                                        <p>{alert.msgContent}</p>
                                                        <Divider hidden />
                                                    </Message>
                                                )}
                                            </Container>
                                            <Divider hidden />
                                        </Fragment>
                                    ))}
                            </Fragment>
                        </animated.div>
                    ))
                }
            </TransitionSpring>
            <TransitionSpring
                native
                items={true}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                config={{ delay: 1000 }}
            >
                {
                    show => show && (props => (
                        <animated.div style={props}>
                            <Fragment>
                                {alerts !== null &&
                                    alerts.length > 0 &&
                                    alerts.map(alert => (
                                        <Fragment key={alert.id}>
                                            <Divider hidden />
                                            <Divider hidden />
                                            <Container style={{ position: "relative" }}>
                                                {alert.alertType === "error" && visible === true && (
                                                    <Message
                                                        error
                                                        onDismiss={e => handleDismiss(e)}
                                                        style={{ zIndex: "100005", position: "fixed", padding: "0 50px" }}
                                                    >
                                                        <Message.Header>{alert.msgHeader}</Message.Header>
                                                        <p>{alert.msgContent}</p>
                                                    </Message>
                                                )}
                                            </Container>
                                            <Divider hidden />
                                        </Fragment>
                                    ))}
                            </Fragment>
                        </animated.div>
                    ))
                }
            </TransitionSpring>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(
    mapStateToProps
)(Alerts);

