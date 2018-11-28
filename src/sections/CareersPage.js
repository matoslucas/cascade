import React, { Component } from 'react';
import { Container, Row, Col, View } from 'mdbreact';

class CareersPage extends Component {
    render() {

        return (
            <Container>
                <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">Careers</h2>
                    <p className="text-center w-responsive mx-auto pb-5">
                        We are always looking for new talent to join us at Cascade.
                        Fill out the following contact form and upload your résumé.
                        We’ll take it from there.
                    </p>


                    <Row>
                        <Col lg="4" md="12" className="mb-lg-0 mb-4">
                            <View hover rounded className="z-depth-1-half mb-4">
                                <img
                                    src={require('../assets/img/careers.jpg')} alt="Careers" />
                            </View>

                        </Col>
                        <Col lg="12">
                            <iframe
                                title="google-form"
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfzHhtU-6ulMmbG9-OG57SPdQmsq8pf4AnytW11D_0JNh-_rg/viewform?embedded=true"
                                width="100%"
                                height="900"
                                frameBorder="0"
                                style={{ border: 0 }}>
                                Loading...
                                </iframe>

                        </Col>

                    </Row>


                </section>
            </Container>
        );
    };
}

export default CareersPage;