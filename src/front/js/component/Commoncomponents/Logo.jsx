import React from "react";
import logo from "../../../img/logo.png";
import styled from "styled-components";

const Logo = () => {
  const LogoRaj = styled.img`
    margin: auto;
    height: 130px;
    width: 130px;
    border-radius: 50%;
  `;
  return (
    <>
      <LogoRaj className="logoRaj" src={logo} alt="logo RAJ" />
    </>
  );
};

export default Logo;
