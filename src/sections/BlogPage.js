import React from "react";
import {
    Container,
    MDBRow,
    MDBCol,
    // MDBCard,
    // MDBCardBody,
    MDBMask,
    MDBIcon,
    MDBView,
    // MDBBtn
} from "mdbreact";

const BlogPage = () => {
    return (
        <Container>

            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Cascade is a unique, full-service exterior-finishing company.
            </h2>
            <p className="text-center w-responsive mx-auto mb-5">
                We provide clients with a variety of applications,
                allowing you to manage your building’s exterior through a single company.
            </p>


            <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView hover className="rounded z-depth-2 mb-4">
                        <img
                            className="img-fluid"
                            src={require('../assets/img/slide-siding.png')}
                            alt="Siding"
                        />
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <a href="#!" className="grey-text">
                        <h5 className="font-weight-bold mb-3">
                            <MDBIcon icon="warehouse" className="pr-2" />
                            Siding
                        </h5>
                    </a>

                    <p className="dark-grey-text">
                        Your building should look good inside and out.
                        It should instill confidence in you and your clientele from the very first look and from every angle.
                    </p>

                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView hover className="rounded z-depth-2 mb-4">
                        <img
                            className="img-fluid"
                            src={require('../assets/img/slide-stucco.jpg')}
                            alt="Stucco"
                        />
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <a href="#!" className="cyan-text">
                        <h5 className="font-weight-bold mb-3">
                            <MDBIcon icon="archway" className="pr-2" />
                            Stucco
                        </h5>
                    </a>
                    <p className="dark-grey-text">
                        Stucco is a popular choice for a look that is even, consistent, and low maintenance.
                        It is naturally flame resistant and durable, so it can take whatever the elements dish out and stay strong.
                    </p>

                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView hover className="rounded z-depth-2 mb-4">
                        <img
                            className="img-fluid"
                            src={require('../assets/img/slide-brick.jpg')}
                            alt="Brick"
                        />
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <a href="#!" className="red-text">
                        <h5 className="font-weight-bold mb-3">
                            <MDBIcon icon="hotel" className="pr-2" />
                            Brick
                        </h5>
                    </a>
                    <p className="dark-grey-text">
                        Brick lends your building a classic look that is hard to beat.
                        It plays on nostalgia for historic downtown businesses and small-town charm,
                        instilling trust at the first look.
                    </p>

                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView hover className="rounded z-depth-2 mb-4">
                        <img
                            className="img-fluid"
                            src={require('../assets/img/slide-stone.jpg')}
                            alt="Stone"
                        />
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <a href="#!" className="green-text">
                        <h5 className="font-weight-bold mb-3">
                            <MDBIcon icon="cubes" className="pr-2" />
                            Stone
                        </h5>
                    </a>

                    <p className="dark-grey-text">
                        Stone has an inherent strength and durability that transfers directly to your building’s aesthetic.
                        We work with leading manufacturers to provide a large variety of both natural and manufactured stones.
                    </p>

                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView hover className="rounded z-depth-2 mb-4">
                        <img
                            className="img-fluid"
                            src={require('../assets/img/slide-soffit-fascia.jpg')}
                            alt="Soffit & Fascia"
                        />
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <a href="#!" className="orange-text">
                        <h5 className="font-weight-bold mb-3">
                            <MDBIcon icon="store-alt" className="pr-2" />
                            Soffit & Fascia
                        </h5>
                    </a>
                    <p className="dark-grey-text">
                        Soffit and fascia work together to beautify your building and improve its performance.
                        Soffit is placed on the underside of eaves and helps moderate your building’s ventilation.
                    </p>

                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView hover className="rounded z-depth-2 mb-4">
                        <img
                            className="img-fluid"
                            src={require('../assets/img/slide-rain-gutters.jpg')}
                            alt="Rain Gutters"
                        />
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <a href="#!" className="grey-text">
                        <h5 className="font-weight-bold mb-3">
                            <MDBIcon icon="kaaba" className="pr-2" />
                            Rain Gutters
                        </h5>
                    </a>
                    <p className="dark-grey-text">
                        Rain gutters are a necessity in utility, but they can also be an opportunity for style.
                        We provide gutters in a variety of materials and colors.
                    </p>

                </MDBCol>
            </MDBRow>

        </Container>
    );
}

export default BlogPage;