import React from "react";
import logo from "../../../img/logo.png";
import styled from "styled-components";

const Logo = () => {
  const LogoRaj = styled.img`
    margin: auto;
    height: 80px;
    width: 80px;
    border-radius: 50%;
  `;
  return (
    <>
      <LogoRaj src={logo} alt="logo RAJ" />
    </>
  );
};

export default Logo;
