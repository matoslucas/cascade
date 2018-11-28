import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  View, 
  // Mask, 
  CardBody, 
  Button, 
  Fa,
 } from 'mdbreact';

class ProjectsPage extends Component {
  render() {
    return (
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            We Are Building the  Legacy Buildings of Tomorrow
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            We are building the legacy buildings of tomorrow, the designs that future generations will look back on for inspiration.
            We believe the only way to give them something worth looking at is by working together: you have the vision, and we have the know-how.
            Our estimators will work with you to create efficient and durable buildings that perform to expectations,
            all while keeping within budget. We’re continuously innovating and finding better ways to design and build.
            We’re cutting costs and waste while improving quality and aesthetics.
            Let’s get started.
          </p>
          <Row className="text-center">
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <View hover rounded className="overlay rounded z-depth-1">
                <img src={require('../assets/img/projects/commons.jpg')} alt="The Commons"
                  className="img-fluid" />
              </View>
              <CardBody className="pb-0">
                <h4 className="font-weight-bold my-3">
                  The Commons
                </h4>
                <p className="grey-text">
                  In the modern industrialized world, construction usually involves the translation of designs into reality.
                </p>
                <Button color="indigo" size="sm"><Fa icon="clone" className="left" /> View project</Button>
              </CardBody>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <View  hover rounded className="overlay rounded z-depth-1">
                <img src={require('../assets/img/projects/harrington-hollow.jpg')} alt="Harrington Hollow"
                  className="img-fluid" />
              </View>
              <CardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Harrington Hollow</h4>
                <p className="grey-text">
                  This spacious single family home does not only have all the modern conveniences homeowners want.
                </p>
                <Button color="indigo" size="sm"><Fa icon="clone" className="left" /> View project</Button>
              </CardBody>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <View  hover rounded className="overlay rounded z-depth-1">
                <img src={require('../assets/img/projects/rushton-meadows.jpg')} alt="Rushton Meadows" className="img-fluid" />
              </View>
              <CardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Rushton Meadows</h4>
                <p className="grey-text">
                  Beautiful condos with spacious rooms and great amenities in a great neighborhood.
                </p>
                <Button color="indigo" size="sm"><Fa icon="clone" className="left" /> View project</Button>
              </CardBody>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default ProjectsPage;