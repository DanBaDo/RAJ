import React from "react";
import background from "../HeroSection/backimg.jpg";
import styled from "styled-components";

const Gallery = () => {
  return (
    <>
      <JumboImg>
        <ContainerImg style={{ backgroundImage: `url(${background})` }}>
          <HeadingContent>
            <HeadingTitle>Registro de autoexclusión</HeadingTitle>
            <p>
              Porque estamos preocupados por tí. </p>
            <p>La adicción al juego es un problema menos
              conocido que las drogas, sin embargo, está presente en la vida de
              muchos.</p>
              <p>Con tu decisión puedes cambiar las cosas.</p>
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
