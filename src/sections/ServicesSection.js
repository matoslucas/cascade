import React from "react";
import {
    MDBContainer,
    MDBJumbotron,
    MDBRow,
    MDBCol,
    MDBIcon,
 
} from "mdbreact";


import ServiceCard from '../components/ServiceCard'


class ServicesSection extends React.Component {
 render() {
   
    return (
        <MDBContainer>
            <MDBJumbotron style={{ marginTop: "1rem" }}>
                <h4 className="card-title">Cascade is a unique, full-service exterior-finishing company.</h4>
                <p>
                    We provide clients with a variety of applications, allowing you to manage your building’s exterior through a single company.
                </p>

                <hr className="my-2" />

            </MDBJumbotron>
            <MDBRow around>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <ServiceCard 
                        img={require('../assets/img/slide-siding.png')} 
                        title={'Siding'}
                        color="grey"
                        icon={<MDBIcon icon="warehouse" className="pr-2" />}
                        content={<div><p>
                            Your building should look good inside and out.
                            </p><p>
                                It should instill confidence in you and your clientele from the very first look and from every angle.
                            
                        </p> </div>}
                    />
                

                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                <ServiceCard 
                        img={require('../assets/img/slide-stucco.jpg')} 
                        title={'Stucco'}
                        color="cyan"
                        icon={<MDBIcon icon="archway" className="pr-2" />}
                        content={<p>
                            Stucco is a popular choice for a look that is even, consistent, and low maintenance.
                        It is naturally flame resistant and durable, so it can take whatever the elements dish out and stay strong.
                        </p>}
                    />

                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">

                <ServiceCard 
                        img={require('../assets/img/slide-brick.jpg')} 
                        title={'Brick'}
                        color="red"
                        icon={<MDBIcon icon="hotel" className="pr-2" />}
                        content={<p>
                             Brick lends your building a classic look that is hard to beat.
                        It plays on nostalgia for historic downtown businesses and small-town charm,
                        instilling trust at the first look.
                        </p>}
                    />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                
                <ServiceCard 
                        img={require('../assets/img/slide-stone.jpg')} 
                        title={'Stone'}
                        color="green"
                        icon={<MDBIcon icon="cubes" className="pr-2" />}
                        content={<p>
                            Stone has an inherent strength and durability that transfers directly to your building’s aesthetic.
                        We work with leading manufacturers to provide a large variety of both natural and manufactured stones.
                        </p>}
                    />


                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">

                <ServiceCard 
                        img={require('../assets/img/slide-soffit-fascia.jpg')} 
                        title={'Soffit & Fascia'}
                        color="orange"
                        icon={<MDBIcon icon="store-alt" className="pr-2" />}
                        content={<p>
                                Soffit and fascia work together to beautify your building and improve its performance.
                                Soffit is placed on the underside of eaves and helps moderate your building’s ventilation.
                            </p>}
                    />

                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">

                <ServiceCard 
                        img={require('../assets/img/slide-rain-gutters.jpg')} 
                        title={'Rain Gutters'}
                        color="grey"
                        icon={<MDBIcon icon="store-alt" className="pr-2" />}
                        content={<p>
                                Rain gutters are a necessity in utility, but they can also be an opportunity for style.
                        We provide gutters in a variety of materials and colors.
                                </p>}
                    />
                    
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}}

export default ServicesSection;

