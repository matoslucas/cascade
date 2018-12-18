import React, { Component } from 'react';
import { 
    Container, 
    MDBJumbotron,
    Row, 
    Col, 
 } from 'mdbreact';

class CareersPage extends Component {
    render() {

        return (
            <Container>
                <MDBJumbotron style={{ marginTop: "1rem" }}>
                    <h2 className="card-title"> Careers </h2>
                    <p>
                    We are always looking for new talent to join us at Cascade.
                    </p>
                    <p>
                    Fill out the following contact form, We’ll take it from there.
                    </p>

                    <hr className="my-2" />

                </MDBJumbotron>
                <section className="my-5">
                    

                    <Row>
                        
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