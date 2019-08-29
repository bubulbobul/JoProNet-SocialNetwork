import React, { Fragment } from 'react'
import {
    Container,
    Grid,
    Header,
    Segment,
    Divider,
    Image,
    Card
} from "semantic-ui-react";

import Mern from "../assets/images/mern2.png"
import MongoDb from "../assets/images/mongodb-icon.jpg"
import ExpressJS from "../assets/images/express.png"
import ReactJs from "../assets/images/react.png"
import NodeJs from "../assets/images/nodejs.png"

import Atlassian from "../assets/images/atlassian.png"
import Facebook from "../assets/images/facebook.png"
import Dropbox from "../assets/images/dropbox.png"
import Netflix from "../assets/images/netflix.png"
import Instagram from "../assets/images/instagram.png"
import Paypal from "../assets/images/paypal.png"
import Uber from "../assets/images/uber.jpg"
import Airbnb from "../assets/images/airbnb.jpeg"
import BBC from "../assets/images/bbc.png"
import Cloudfare from "../assets/images/cloudfare.png"
import AlloCine from "../assets/images/allocine.png"
import Yahoo from "../assets/images/yahoomail.jpg"

const MernStack = () => {
    return (
        <Fragment>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Container>
                <Segment color="blue">
                    <Container textAlign="justified">
                        <Header as='h2'>
                            <Image circular src={Mern} />
                            <Header.Content>MERN
                            <Header.Subheader>
                                    What is MERN Stack Development?
                            </Header.Subheader>
                            </Header.Content>
                        </Header>
                        <p style={{ color: "#333", fontSize: "1.3rem" }}>
                            MERN stack is the name given to a set of JavaScript based technologies used in developing web applications. MERN is the acronym name given to the set of technologies including Mongo DB, Express JS, React JS/ Redux and Node JS. Among these technologies Mongo DB is a database system, Node JS is a back-end runtime environment, Express JS is a back-end web framework and React is a front-end framework.
                        </p>
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment raised>
                                        <Container textAlign="justified">
                                            <Header as='h2'>
                                                <Image circular src={MongoDb} />
                                                <Header.Content>Mongo
                                                <Header.Subheader>
                                                        What is Mongodb?
                                                </Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>
                                                MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data.
                                            </p>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>It is one of numerous nonrelational database technologies which arose in the mid-2000s under the NoSQL banner for use in big data applications and other processing jobs involving data that doesn't fit well in a rigid relational model. </p>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>Instead of using tables and rows as in relational databases, the MongoDB architecture is made up of collections and documents.</p>
                                        </Container>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment raised>
                                        <Container textAlign="justified">
                                            <Header as='h2'>
                                                <Image circular src={ExpressJS} />
                                                <Header.Content>Express
                                                <Header.Subheader>
                                                        What is Express?
                                                </Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>
                                                Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
                                            </p>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>
                                                The original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the backend part of the MEAN stack, together with Mongo DB database and AngularJS frontend framework.
                                            </p>
                                        </Container>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment raised>
                                        <Container textAlign="justified">
                                            <Header as='h2'>
                                                <Image circular src={ReactJs} />
                                                <Header.Content>React
                                                <Header.Subheader>
                                                        What is React?
                                                </Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>
                                                React (also known as React.js or React JS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                                            </p>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>
                                                React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.
                                            </p>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>
                                                <strong>Redux</strong> is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.
                                            </p>
                                        </Container>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment raised>
                                        <Container textAlign="justified">
                                            <Header as='h2'>
                                                <Image circular src={NodeJs} />
                                                <Header.Content>Node
                                                <Header.Subheader>
                                                        What is Node?
                                                </Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>
                                                Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser.
                                            </p>
                                            <p style={{ color: "#333", fontSize: "1.3rem" }}>
                                                Node.js lets developers use JavaScript to write Command Line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web application development around a single programming language, rather than different languages for server side and client side scripts.
                                            </p>
                                        </Container>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Fragment>
                            <Segment raised>
                                <Header>The most popular website which use React in Front-End</Header>
                                <Card.Group itemsPerRow={4}>
                                    <Card>
                                        <Image src={Facebook} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Facebook, Inc.</Card.Header>
                                            <Card.Meta>Social network company</Card.Meta>
                                            <Card.Description>
                                            Facebook is a social networking website where users can post comments, share photographs and post links to news or other interesting content on the web, chat live, and watch short-form video. 
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={Yahoo} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Yahoo! Mail</Card.Header>
                                            <Card.Meta>Email services</Card.Meta>
                                            <Card.Description>
                                            Yahoo! Mail is an email service launched in 1997 through the American parent company Yahoo!. Yahoo Mail provides four different email plans: three for personal use and another for businesses. By December 2011, Yahoo! Mail had 281 million users, making it the third largest web-based email service in the world.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={Atlassian} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Atlassian</Card.Header>
                                            <Card.Meta>Software company</Card.Meta>
                                            <Card.Description>
                                            Atlassian is a leading provider of collaboration software for teams with products including JIRA, Confluence, HipChat, Bitbucket and Stash.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={Uber} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Uber Technologies Inc</Card.Header>
                                            <Card.Meta>Transport company</Card.Meta>
                                            <Card.Description>
                                            Uber is a mobile app connecting passengers with drivers for hire. This ferocious company brought digital matching firms to mainstream usage. They’ve swept up the taxi hire industry.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={Netflix} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Netflix</Card.Header>
                                            <Card.Meta>Media production</Card.Meta>
                                            <Card.Description>
                                            Netflix is a streaming service that allows our members to watch a wide variety of award-winning TV shows, movies, documentaries, and more on thousands of internet-connected devices. 
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={Instagram} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Instagram</Card.Header>
                                            <Card.Meta>Social networking service</Card.Meta>
                                            <Card.Description>
                                            Instagram is a free photo sharing application that enables its users to take photos, apply filters, and share them on social networks.<br /> They were Acquired by Facebook on April 9, 2012.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={Cloudfare} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Cloudfare</Card.Header>
                                            <Card.Meta>Internet company</Card.Meta>
                                            <Card.Description>
                                            Cloudflare, Inc. is an American web infrastructure and website security company, providing content delivery network services, DDoS mitigation, Internet security, and distributed domain name server services.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={AlloCine} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>AlloCiné</Card.Header>
                                            <Card.Meta>Company</Card.Meta>
                                            <Card.Description>
                                            AlloCiné is a company which provides information on French cinema, especially centering on novelties' promotion with DVD, Blu-ray and VOD information.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={Paypal} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Paypal</Card.Header>
                                            <Card.Meta>Company</Card.Meta>
                                            <Card.Description>
                                            PayPal provides online payment solutions to its users worldwide. The origin of the infamous Paypal Mafia that has founded companies like Youtube, Palantir, and Tesla, all giants in their own right.<br /> They were Acquired by eBay on July 8, 2002
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={Airbnb} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Airbnb</Card.Header>
                                            <Card.Meta>Company</Card.Meta>
                                            <Card.Description>
                                            A‌i‌r‌b‌n‌b‌, ‌ ‌I‌n‌c‌.‌ is an online marketplace for arranging or offering lodging, primarily homestays, or tourism experiences. The company does not own any of the real estate listings, nor does it host events; it acts as a broker, receiving commissions from each booking.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={BBC} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>BBC</Card.Header>
                                            <Card.Meta>Broadcasting company</Card.Meta>
                                            <Card.Description>
                                            The British Broadcasting Corporation is a British public service broadcaster. Its headquarters are at Broadcasting House in Westminster, London, and it is the world's oldest national broadcasting organisation and the largest broadcaster in the world by number of employees.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Image src={Dropbox} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Dropbox</Card.Header>
                                            <Card.Meta>Software</Card.Meta>
                                            <Card.Description>
                                            Dropbox is a file hosting service operated by the American company Dropbox, Inc., headquartered in San Francisco, California, that offers cloud storage, file synchronization, personal cloud, and client software.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Group>
                            </Segment>
                        </Fragment>
                    </Container>
                </Segment>
            </Container>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
        </Fragment>
    )
}

export default MernStack
