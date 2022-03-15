import React from "react";
import background from "../HeroSection/backimg.jpg";
import styled from "styled-components";

const Gallery = () => {
  return (
    <>
      <JumboImg>
        <ContainerImg style={{ backgroundImage: `url(${background})` }}>
          <HeadingContent>
            <HeadingTitle>Registro de autoexclucion</HeadingTitle>
            <p>
              Por que estamos preocupados por ti, la adicion al juego es menos
              popular que las drogas sin embargo ahi esta presente en la vida de
              muchos con tu desicion puedes cambiar las cosas
            </p>
          </HeadingContent>
        </ContainerImg>
      </JumboImg>
    </>
  );
};
const ContainerImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
`;
const JumboImg = styled.div`
  height: 100vh;
`;
const HeadingContent = styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
  text-align: center;
`;
const HeadingTitle = styled.h1``;
export default Gallery;
