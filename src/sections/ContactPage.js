import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';

class ContactPage extends Component {
    render() {
        const circleButtonStyle = {
            borderRadius: '50%',
            width: 60,
            height: 60,
            margin: 0,
            padding: 0,
        }
        return (
            <Container>
                <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
                    <p className="text-center w-responsive mx-auto pb-5">
                        We are building the legacy buildings of tomorrow,
                        the designs that future generations will look back on for inspiration.
                        We believe the only way to give them something worth looking at is by working together:
                        you have the vision, and we have the know-how.
                    </p>


                    <Row>
                        <Col lg="12">
                            <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: '400px' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.2936828928973!2d-111.73205518510512!3d40.29143767937986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9b30eb9943cd%3A0x1ac66f74b6d95548!2sCascade+Stucco+And+Exteriors!5e0!3m2!1sen!2sus!4v1542825913546" width="100%" height="100%" frameBorder="0" style={{ border: 0 }}></iframe>
                            </div>
                            <br />

                        </Col>
                        <Col lg="12">
                            <br />
                        </Col>
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
                                                    <Fa icon="send-o" />
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                        </Col>


                    </Row>

                    <Col lg="12">
                        <br />
                    </Col>

                    <Row className="text-center">
                        <Col>
                            <Button color="blue" size="lg" style={circleButtonStyle}>
                                <Fa icon="map-marker" />
                            </Button>
                            <br />
                            <a href="https://www.google.com/maps/dir/?api=1&destination=352+Gold+Tip+Dr+OREM+UT+84058">
                                352 Gold Tip Drive, Orem, UT 84058
                                    </a>
                        </Col>
                        <Col>
                            <Button size="lg" color="blue" style={circleButtonStyle}>
                                <Fa icon="phone" />
                            </Button>
                            <br />
                            <a href="tel:801-980-3393">(801) 980-3393</a>
                            <p className="mb-md-0">Mon-Fri, 8:00-5:00</p>
                        </Col>
                        <Col>
                            <Button size="lg" color="blue" style={circleButtonStyle}>
                                <Fa icon="envelope" />
                            </Button>
                            <br />
                            <a href="mailto:info@cascade.build?Subject=Contact">info@cascade.build</a>
                        </Col>
                    </Row>


                </section>
            </Container>
        );
    };
}

export default ContactPage;