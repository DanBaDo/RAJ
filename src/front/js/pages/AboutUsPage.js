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
            ludopatia ,al registro para la auto-exclusión a locales de juegos de
            azar.
            <p>
              <strong>RAJ</strong> es la plataforma encarga de hacer de
              intermediario entre los salones de juego y las personas.Mediante
              el registro de autoexclusión <strong>RAJ</strong> se encarga de
              hacer el proceso automáticamente cuando el usuario este
              registrado.
            </p>
            <p>
              <strong>RAJ</strong> después de comprobar que el usuario es
              correcto y no habido ningún problema en el proceso de registro .{" "}
              <strong>RAJ</strong> procede a tratar los datos de este , siempre
              en confidencialidad para que conste en todos los locales que este
              afecta.
            </p>
            <p>
              <strong>RAJ</strong> quiere colaborar con las personas afectadas y
              ayudar con su recuperación mediante este proceso.No es el paso
              definitivo para la recuperación ya que esta enfermedad debe ser
              tratada por profesionales especializados.
              <u>No tengas miedo y pide ayuda.</u>{" "}
            </p>
          </p>
        </Row>
      </Container>
    </>
  );
};

export default AboutUsPage;
