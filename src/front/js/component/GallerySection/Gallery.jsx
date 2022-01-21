import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
const Gallery = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/300x150"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src="https://via.placeholder.com/300x150" alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://via.placeholder.com/300x150" alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
