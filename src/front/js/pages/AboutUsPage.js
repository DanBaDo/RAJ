import React from "react";
import { Container, Row } from "react-bootstrap";
import { Logo } from "../component/IndexComponents.js";
const AboutUsPage = () => {
  return (
    <>
      <Container className="text-center">
        <Row>
          <h1>
            ¿Que es <strong>RAJ</strong>?
          </h1>
          <p>
            <strong>RAJ</strong> es la web que ayuda a personas con problemas de
            ludopatía ,al registro para la autoexclusión a locales de juegos de
            azar.
            <p>
              <strong>RAJ</strong> es la plataforma encarga de hacer de
              intermediario entre los salones de juego y las personas. Mediante
              el registro de autoexclusión <strong>RAJ</strong> se encarga de
              hacer el proceso automáticamente cuando el usuario esté
              registrado.
            </p>
            <p>
              <strong>RAJ</strong>, después de comprobar que el usuario es
              correcto, y si no ha habido ningún problema en el proceso de registro .{" "}
              <strong>RAJ</strong> procede a tratar los datos de éste para hacerlo constar en
               todos los locales de juego.
            </p>
            <p>
              <strong>RAJ</strong> quiere colaborar con las personas afectadas y
              ayudar con su recuperación mediante este proceso. No es el paso
              definitivo para la recuperación ya que esta enfermedad debe ser
              tratada por profesionales especializados.<br/>
              <u>No tengas miedo y pide ayuda.</u>{" "}
            </p>
          </p>
        </Row>
      </Container>
    </>
  );
};

export default AboutUsPage;
