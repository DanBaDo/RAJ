import React from "react";
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import styled from "styled-components";
const Footer = () => {
  const ContainerFooterSection = styled.div`
    background-color: #1f2b5b;
    width: 100%;
    height: 40vh;
    color: white;
    text-align: center;
    padding-top:5%;
  `;
  return (
    <>
      <ContainerFooterSection>
          <h4>Informacion legal</h4>
          <p>Numero de registro legal : 123456789</p>
          <h5>Siguenos en nuestras redes</h5>
          <BsFacebook/>
          <BsInstagram/>
          <h6>Proudly created by Adrian, DanBoDo, Bigbitdev, 2022</h6>
      </ContainerFooterSection>
    </>
  );
};

export default Footer;
