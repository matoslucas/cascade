import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Fa, Tooltip, Badge, Button } from 'mdbreact';

class EcommercePage extends Component {
  render() {
    return(
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
          <p className="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce className="view zoom">
                <CardImage cascade  className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody cascade className="text-center">
                  <a href="" className="grey-text">
                    <h5>Denim</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">Denim trousers</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star-o"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>49$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" className="active" componentClass="fa fa-heart ml-3" tooltipContent="Added to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody cascade className="text-center">
                  <a href="" className="">
                    <h5>Shoes</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">High heels</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>89$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart ml-3" tooltipContent="Add to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody cascade className="text-center">
                  <a href="">
                    <h5>Outwear</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">Brown coat</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star-half-full"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>59$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart ml-3" tooltipContent="Add to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody cascade className="text-center">
                  <a href="">
                    <h5>Blouses</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">Shirt</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star-o"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>119$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" className="active" componentClass="fa fa-heart ml-3" tooltipContent="Added to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default EcommercePage;