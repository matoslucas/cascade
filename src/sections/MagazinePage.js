import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, Badge} from 'mdbreact';

const MagazinePage = () =>  {
  const newsStyle={borderBottom: '1px solid #e0e0e0', marginBottom: '1.5rem'}
  return(
    <Container style={{maxWidth: '80%'}}>
      <h2 className="h1-responsive font-weight-bold my-5 text-center">Section title</h2>
      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>
      <Row>
        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          <Row className="mb-3">
            <Col size="12">
              <a><Badge color="pink"><Fa icon="camera" className="pr-2" aria-hidden="true"/>Adventure</Badge></a>
            </Col>
          </Row>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a className="font-weight-bold">This is title of the news</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>24 Food Swaps That Slash Calories.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>How to Make a Beet Cocktail?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>8 Sneaky Reasons You're Always Hungry.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>5 Pressure Cooker Recipes You Need to Try.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
        </Col>

        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          <Row className="mb-3">
            <Col size="12">
              <a><Badge color="deep-orange"><Fa icon="plane" className="pr-2" aria-hidden="true"/>Travel</Badge></a>
            </Col>
          </Row>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a className="font-weight-bold">This is title of the news</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>Trends in the blogosphere for 2018.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>Where can you eat the best lunch in Warsaw?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>What camera is worth taking for holidays?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>Why should you visit Lisbon?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
        </Col>

        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          <Row className="mb-3">
            <Col size="12">
              <a><Badge color="success"><Fa icon="leaf" className="pr-2" aria-hidden="true"/>Nature</Badge></a>
            </Col>
          </Row>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a className="font-weight-bold">This is title of the news</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>How to recognize the footsteps of wild animals?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>National Parks in Poland.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>Traveling without littering the planet.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>How to protect rainforests?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MagazinePage;