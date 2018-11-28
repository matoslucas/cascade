import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Fa,
    // Button
} from 'mdbreact';

class FeaturesPage extends Component {
    render() {
        return (
            <Container>
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        At Cascade, your exterior project is in good hands.
                    </h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        We partner with our clients to give them exactly the look they envision with
                        professional guidance and execution. Because we work directly with you,
                         you’ll never have to worry about having your vision supplanted with another’s.
                         You are our focus, and your success is our success.
                         Call us today and get the look you want with the service you want.
                    </p>

                    <h2 className="h1-responsive font-weight-bold my-5">
                        The Cascade Way.
                    </h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        We are building the legacy buildings of tomorrow,
                        the designs that future generations will look back on for inspiration.
                        We believe the only way to give them something worth looking at is by working together:
                         you have the vision, and we have the know-how.
                         Our estimators will work with you to create efficient and durable buildings that perform to expectations,
                          all while keeping within budget.
                          We’re continuously innovating and finding better ways to design and build. We’re cutting costs and waste while improving quality and aesthetics. Let’s get started.
                    </p>

                    <h2 className="h1-responsive font-weight-bold my-5">
                        Services
                    </h2>

                    <Row>
                        <Col md="4">
                            <Fa icon="warehouse" size="3x" className="grey-text" />
                            <h5 className="font-weight-bold my-4">Siding</h5>
                            <p className="grey-text mb-md-0 mb-5">
                                Your building should look good inside and out.
                                It should instill confidence in you and your clientele from the very first look
                                and from every angle.
                            </p>
                        </Col>
                        <Col md="4">
                            <Fa icon="archway" size="3x" className="cyan-text" />
                            <h5 className="font-weight-bold my-4">Stucco</h5>
                            <p className="grey-text mb-md-0 mb-5">
                                Stucco is a popular choice for a look that is even, consistent, and low maintenance.
                                It is naturally flame resistant and durable, so it can take whatever the elements dish out and stay strong.
                            </p>
                        </Col>
                        <Col md="4">
                            <Fa icon="hotel" size="3x" className="red-text" />
                            <h5 className="font-weight-bold my-4">Brick</h5>
                            <p className="grey-text mb-md-0 mb-5">
                                Brick lends your building a classic look that is hard to beat.
                                It plays on nostalgia for historic downtown businesses and small-town charm,
                                instilling trust at the first look.
                             </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="4">
                            <Fa icon="cubes" size="3x" className="green-text" />
                            <h5 className="font-weight-bold my-4">Stone</h5>
                            <p className="grey-text mb-md-0 mb-5">
                                Stone has an inherent strength and durability that transfers directly to your building’s aesthetic.
                                We work with leading manufacturers to provide a large variety of both natural and manufactured stones.
                            </p>
                        </Col>
                        <Col md="4">
                            <Fa icon="store-alt" size="3x" className="orange-text" />
                            <h5 className="font-weight-bold my-4">Soffit & Fascia</h5>
                            <p className="grey-text mb-md-0 mb-5">
                                Soffit and fascia work together to beautify your building and improve its performance.
                                Soffit is placed on the underside of eaves and helps moderate your building’s ventilation.
                            </p>
                        </Col>
                        <Col md="4">
                            <Fa icon="kaaba" size="3x" className="grey-text" />
                            <h5 className="font-weight-bold my-4">Rain Gutters</h5>
                            <p className="grey-text mb-md-0 mb-5">
                                Rain gutters are a necessity in utility, but they can also be an opportunity for style.
                                We provide gutters in a variety of materials and colors.
                            </p>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    };
}

export default FeaturesPage;