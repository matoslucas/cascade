import React, { Component } from 'react';
import {
    MDBContainer,
    MDBJumbotron,
    Row,
    Col,
    // Card, 
    // CardBody, 
    // Fa, 
    //Button, 
    // Input
} from 'mdbreact';

class ContactPage extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBJumbotron style={{ marginTop: "1rem" }}>
                    <h2 className="card-title"> Contact us </h2>
                    <p>
                        We believe the only way to give them something worth looking at is by working together:
                    </p>
                    <p>
                        you have the vision, and we have the know-how.
                    </p>

                    <hr className="my-2" />

                </MDBJumbotron>
                <section className="my-5">
                    
                    <Row>
                        <Col lg="12">
                            <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: '400px' }}>
                                <iframe
                                    title="google-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.2936828928973!2d-111.73205518510512!3d40.29143767937986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9b30eb9943cd%3A0x1ac66f74b6d95548!2sCascade+Stucco+And+Exteriors!5e0!3m2!1sen!2sus!4v1542825913546"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0 }}>
                                </iframe>
                            </div>
                            <br />

                        </Col>
                        <Col lg="12">

                            <iframe
                                title="google-form"
                                src="https://docs.google.com/forms/d/e/1FAIpQLSeo4qDLaxT1S8HGoZ-PfCTF_ouZY7g31ZYxxpq7ChIxQhHHSw/viewform?embedded=true"
                                width="100%"
                                height="900"
                                frameBorder="0"
                                style={{ border: 0 }}>
                                Loading...
                                </iframe>

                        </Col>
                        {/*
                        <Col lg="12">

                            <Card>
                                <CardBody className="form" style={{ color: '#1976d2' }}>
                                    <h3 className="mt-4">
                                        <Fa icon="envelope" className="pr-2" />Write to us:
                                    </h3>
                                    <Row>
                                        <Col md="6">
                                            <div className="md-form mb-0">
                                                <Input type="text" id="form-contact-name" label="Your name" />
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div className="md-form mb-0">
                                                <Input type="text" id="form-contact-email" label="Your email" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <div className="md-form mb-0">
                                                <Input type="text" id="form-contact-phone" label="Your phone" />
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div className="md-form mb-0">
                                                <Input type="text" id="form-contact-company" label="Your company" />
                                            </div>
                                        </Col>

                                        <Col md="12">
                                            <div className="d-flex justify-content-around align-items-center"  >
                                                <div style={{ width: '85%' }}>
                                                    <textarea id="form-contact-message"
                                                        className="form-control"
                                                    >Your message</textarea>
                                                </div>
                                                <Button color="blue" size="lg" style={circleButtonStyle}>
                                                    <Fa icon="paper-plane" />
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                        </Col>
                        */}

                    </Row>

                </section>
            </MDBContainer>
        );
    };
}

export default ContactPage;