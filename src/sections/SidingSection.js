import React from "react";
import {
    MDBContainer,
    MDBJumbotron,
    MDBRow,
    MDBCol,
    //MDBIcon,
 
} from "mdbreact";


import ProductCard from '../components/ProductCard'


class SidingSection extends React.Component {
 render() {
   
    return (
        <MDBContainer>
            <MDBJumbotron style={{ marginTop: "1rem" }}>
                <h4 className="card-title">Siding Installation</h4>

                <p>
                    Exterior siding is a big part of your project curb appeal, making it crucial that you install it properly. 
                </p>
                <p>
                Our professional siding installers will ensure that the installation is done right. 
                </p>
                 <p>
                 With Cascade, you know your project will benefit from the expertise of qualified 
                 siding team and installers, all backed by the best warranties in the siding business.
                </p>
               
                <p>
                    Cascade installs fiber cement siding made by James Hardie, America’s number one siding brand.     
                </p>
                

                <hr className="my-2" />

            </MDBJumbotron>
            <MDBRow around>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <ProductCard 
                        img={require('../assets/img/siding/cedarmill.png')} 
                        title={'HardiePlank® Lap Siding'}
                        color={'#601e1f'}
                        data={[
                            '#601e1f',
                            '#5e3c1f',
                            '#847556', 
                            '#2e2e2c',
                            '#425259',
                            '#7d7974',

                            '#9fa06f',
                            //'#efe7b8',
                        ]}
                    />
                

                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                <ProductCard 
                        img={require('../assets/img/siding/staggered.png')} 
                        title={'HardieShingle® Siding'}
                        color={'#9fa06f'}
                        data={[
                            '#601e1f',
                            '#5e3c1f',
                            '#847556', 
                            '#2e2e2c',
                            '#425259',
                            '#7d7974',

                            '#9fa06f',
                            //'#efe7b8',
                        ]}
                    />

                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">

                <ProductCard 
                        img={require('../assets/img/siding/cedarmillVertical.png')} 
                        title={'HardiePanel® Vertical Siding'}
                        color={'#7d7974'}
                        data={[
                            '#601e1f',
                            '#5e3c1f',
                            '#847556', 
                            '#2e2e2c',
                            '#425259',
                            '#7d7974',

                            '#9fa06f',
                            //'#efe7b8',
                        ]}
                    />
                </MDBCol>
            </MDBRow>
            {/*
            <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                
                <ProductCard 
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

                <ProductCard 
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

                <ProductCard 
                        img={require('../assets/img/slide-rain-gutters.jpg')} 
                        title={'Rain Gutters'}
                        color="grey"
                        icon={<MDBIcon icon="kaaba" className="pr-2" />}
                        content={<p>
                                Rain gutters are a necessity in utility, but they can also be an opportunity for style.
                        We provide gutters in a variety of materials and colors.
                                </p>}
                    />
                    
                </MDBCol>
            </MDBRow>
            */}
        </MDBContainer>
    );
}}

export default SidingSection;

