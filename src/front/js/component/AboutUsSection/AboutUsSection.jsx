import React from 'react';
import { Container, Row } from "react-bootstrap";
import styled from 'styled-components';



const AboutUsSection = () => {
  const ContainerImg = styled.img`
  max-width: 100%;
  heigth:auto;
  width:auto;
  `
  return (<>
    <Container className="my-5">
      <Row className='m-0 justify-content-center align-items-center'>
        <Container className=' p-5 text-center'>
          <h1>Sobre Nosotros</h1>
          <h2>¿Que es RAJ?</h2>
          <p>Raj es la  web que ayuda a personas con problemas de ludopatia ,al registro para la auto-exclusión a locales de juegos de azar.

            RAJ es la plataforma encarga de hacer de intermediario entre los salones de juego y las personas.Mediante el registro de autoexclusión,  RAJ se encarga de hacer el proceso automáticamente cuando el usuario este registrado.
            RAJ después  de comprobar que el usuario es correcto y no habido ningún problema en el proceso de registro . RAJ procede a tratar los datos de este , siempre en confidencialidad para que conste en todos los locales que este afecta.

            RAJ quiere colaborar con las personas afectadas y ayudar con su recuperación mediante este proceso.No es el paso definitivo para la recuperación ya que esta enfermedad debe ser tratada por profesionales especializados.

            No tengas miedo y pide ayuda .
          </p>
          <ContainerImg src="https://image.freepik.com/foto-gratis/primer-plano-mano-ofrecimiento-hombre-negocios-apreton-manos_1262-17295.jpg?w=740" alt="primer-plano-mano-ofrecimiento-hombre-negocios-apreton-manos" />
        </Container>
      </Row>
    </Container>
  </>);
};

export default AboutUsSection;
