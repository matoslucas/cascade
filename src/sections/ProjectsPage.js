import React, { Component } from 'react';
import {
  Container,
  MDBJumbotron,
  Row,
  Col,
} from 'mdbreact';

import ProjectCard from '../components/ProjectCard'

class ProjectsPage extends Component {
  render() {
    return (
      <Container>
        <MDBJumbotron style={{ marginTop: "1rem" }}>
          <h2 className="card-title"> Projects Gallery</h2>
          <p>
            We Are Building the  Legacy Buildings of Tomorrow
                    </p>

          <hr className="my-2" />

        </MDBJumbotron>
        <section className="text-center my-5">
          <Row className="text-center">

            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <ProjectCard
                img={require('../assets/img/projects/legacyFarms/Legacy_Farms.jpg')}
                title={'Legacy Farms'}
                link="/legacyfarms"
                content={<p className="text-left">
                  As a confident partner we have work with more than 800 homes builded by D.R. Horton company.
                  Located at Saratoga Springs wich is the Utah Valley’s top-selling community.
                   </p>}
              />

            </Col>

            <Col lg="4" md="12" className="mb-lg-0 mb-4">

              <ProjectCard
                img={require('../assets/img/projects/parkEstates/Edison_Traditinoal_at_Ivory_Ridge_1.jpg')}
                title={'Park Estates'}
                link="/parkestates"
                content={<p className="text-left">
                  Edison traditional	Ivory Ridge at Park Estates
                   </p>}
              />
            </Col>


            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <ProjectCard
                img={require('../assets/img/projects/commons.jpg')}
                title={'The Commons'}
                link=""
                content={<p className="text-left">
                  In the modern industrialized world, construction usually involves the translation of designs into reality.

                   </p>}
              />

            </Col>
          </Row>
          <Row className="text-center">
            <Col lg="4" md="12" className="mb-lg-0 mb-4">

              <ProjectCard
                img={require('../assets/img/projects/harrington-hollow.jpg')}
                title={'Harrington Hollow'}
                link=""
                content={<p className="text-left">
                  This spacious single family home does not only have all the modern conveniences homeowners want.
                   </p>}
              />

              
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">

            <ProjectCard
                img={require('../assets/img/projects/rushton-meadows.jpg')}
                title={'Rushton Meadows'}
                link=""
                content={<p className="text-left">
                 Beautiful condos with spacious rooms and great amenities in a great neighborhood.
                 </p>}
              />
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default ProjectsPage;