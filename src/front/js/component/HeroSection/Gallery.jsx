import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Gallery = () => {
  const ContainerImg = styled.img`
  width:100%;
  heigth:auto;
  max-width:100%;
  
  `
  return (
    <>
      <ContainerImg  src="https://www.bienestarcolsanitas.com/images/2-SECCIONES/VIDA/CRONICA/LUDOPAT%C3%8DA/Ludopat%C3%ADa-SLIDE.jpg"
        alt="imagen rey ludopatia"/>
    </>
  );
};

export default Gallery;
