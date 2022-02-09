import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import styled from "styled-components";
const Gallery = () => {
  return (
    <>
      <Container className="mt-4" fluid>
        <Row>
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://www.bienestarcolsanitas.com/images/2-SECCIONES/VIDA/CRONICA/LUDOPAT%C3%8DA/Ludopat%C3%ADa-SLIDE.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1 className="fs-1">Tranqui ¡Que Yo controlo!</h1>
                <p>
                  La frase que mas pronunciada cuando empiezas a ser esclavo del juego.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src="https://via.placeholder.com/300x150" alt="Second slide" />
              <Carousel.Caption>
                <h3>Pide ayuda </h3>
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
