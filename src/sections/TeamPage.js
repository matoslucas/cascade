import React, { Component } from 'react';
import {
    // Container,
    Row,
    Col,
    //View,
    MDBJumbotron,
    //MDBCol, MDBRow, 
    MDBContainer,
    //MDBBtn,
    //MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
} from 'mdbreact';

// import ProfileCard from '../components/ProfileCard'
import Profile from '../components/Profile'

class TeamPage extends Component {

    render() {

        const MD = '4';
        const LG = '4';

        return (
            <MDBContainer>
                <MDBJumbotron style={{ marginTop: "1rem" }}>
                    <h2 className="card-title">Our Team</h2>
                    <p>
                        We owe all of our success to our wonderful employees:
                        they’re always on call and looking for ways to get more done in less time.
                    </p>
                    <p>
                        Our employees use innovative database technology that streamlines scheduling
                        and other essential business information, accessing critical data and workflows
                        from a single smartphone app.
                    </p>
                    <p>
                        We continue to innovate by borrowing from years of experience in different industries.
                    </p>
                    <hr className="my-2" />
                    
                </MDBJumbotron>

                    <Row>
                        <Col lg={LG} md={MD} className="mb-lg-0 mb-4">
                            <Profile name={'Scott Hammond'} title={'Partner'}
                                img={require('../assets/img/profiles/Scot-HammondWB.jpg')}
                                bio={<div>
                                    Scott began his career over 20 years ago with a bachelor’s in psychology and a minor and Spanish.|
                                    Since then, he’s successfully run several companies crossing through different industries,
                                    most recently serving as CEO of Purqz.
                                    At Cascade, Scott oversees all operations, scheduling, sales, and hiring,
                                    with too many other responsibilities to list.
                                    He brings an entrepreneurial spirit with him wherever he goes,
                                    inspiring coworkers and employees to find solutions where they would never have looked before.
                                    Scott currently lives in Alpine, Utah, with his family, dreaming of the day he’ll get his chance on
                                    Dancing with the Stars.
                                    </div>
                                }
                            />
                        </Col>

                        <Col lg={LG} md={MD} className="mb-lg-0 mb-4">

                            <Profile name={'Ben Probst'} title={'Partner'}
                                img={require('../assets/img/profiles/Ben-ProbstWB.jpg')}
                                bio={<div>
                                    Ben is the contractor’s contractor—he’s done it all.
                                    On the one hand, he’s a real estate expert |  and has bought and sold hundreds of properties.

                                    But the other hand is strong from years spent framing, tiling,
                                            painting—everything it takes to build a house from nothing.
                                    He spent 15 years building custom homes; his completed projects number in the hundreds.
                                    As a partner at Cascade, Ben takes care of field operations, installation processes, training,
                                    warranties, and asset acquisition and maintenance.
                                    He lives in Herriman, Utah, with his family, exploring the nearby canyons top to bottom.
                                </div>
                                } />

                        </Col>

                        <Col lg={LG} md={MD} className="mb-lg-0 mb-4">
                            <Profile name={'Kyle Widdison'} title={'Partner'}
                                img={require('../assets/img/profiles/Kyle-WiddisonWB.jpg')}
                                bio={<div>
                                    Kyle joined Cascade as a partner after 15 years of management, financial strategy, and consulting.
                                    |
                                    In 2007 he cofounded Purqz, a property management company, where he served as COO.
                                    He also worked as an instructor for Manhattan GMAT,
                                    preparing the business leaders of tomorrow for what’s to come.

                                    Kyle puts his experience to use today by overseeing all of Cascade’s pre-construction activities,
                                    financial functions, and information systems.
                                    He lives in Saratoga Springs, Utah,
                                    playing whatever sport you suggest and building a pen for his herd of eight children and three foster kids.
                                </div>
                                } />

                        </Col>
                    </Row>


                    <Row>
                        

                        <Col lg={LG} md={MD} className="mb-lg-0 mb-4">

                            <Profile name={'Brenda Leyva'} title={'Administrator'}
                                img={require('../assets/img/profiles/Brenda-LeyvaWB.jpg')}
                                bio={<div>
                                    Brenda is a recent addition to the Cascade family but a crucial one.
                                    She works directly with our contractors and clients on warranties.| making sure homeowners know that they’re being taken care of.
                                    She’s also in charge of placing orders and keeping up communication with our material suppliers, ensuring we’ve got enough cement, stone, and siding to make your home look its best.
                                    Brenda graduated from Brigham Young University with a bachelor’s in business management and a minor in entrepreneurship.
                                    She speaks Spanish and Portuguese fluently, making it easier to pop on down to Peru to visit the folks.
                                    </div>
                                } />

                        </Col>

                        <Col lg={LG} md={MD} className="mb-lg-0 mb-4">
                            <Profile name={'Adela Mancera'} title={'Safety Coordinator'}
                                img={require('../assets/img/profiles/Adela-ManceraWB.jpg')}
                                bio={<div>
                                    There’s a reason you never see our contractors without their safety goggles, and that reason is Adela.
                                    |We want our employees to be happy and healthy,
                                    and Adela makes sure that they have the tools and regulations to be just that.
                                    When not watching out for us, Adela is constantly improving herself;
                                    she is a self-taught pianist and is currently learning Italian and Chinese,
                                    making her a soon-to-be quintilingual with English, Spanish, and ASL already under her belt.
                                    As if keeping OSHA satisfied wasn’t challenge enough.
                                </div>
                                } />

                        </Col>
                    </Row>
            
            </MDBContainer>
        )
    }

}

export default TeamPage;