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
          <h4>Información legal</h4>
          <p>Numero de registro legal : 123456789</p>
          <h5>Síguenos en las redes</h5>
          <BsFacebook/>
          <div className="vr mx-3 "></div>
          <BsInstagram/>
          <h6>Proudly created by Adrián, DanBaDo, Bigbitdev, 2022</h6>
      </ContainerFooterSection>
    </>
  );
};

export default Footer;
