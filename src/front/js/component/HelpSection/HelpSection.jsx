import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
const HelpSection = () => {
    const ContainerImg = styled.img`
    max-width: 100%;
    heigth:auto;
    width:auto;
    `
    return (<>
        <Container className="my-3">
            <Row>
                <Col md={{order:"first"}} xs={{ order: 'last' }}>
                    <ContainerImg src="https://okdiario.com/img/2020/10/19/tratamiento-de-la-ludopatia-en-los-mas-jovenes.jpg" alt="Hombre lamentandose " />
                </Col>
                <Col md={6} xs={12}>
                    <h1>¿Que es la ludopatia?</h1>
                    <p>La ludopatía es la adicción a los juegos de azar. Esto puede llevar a la pérdida de trabajo, problemas de dinero, fraude, crimen o problemas en las relaciones familiares.

</p>       
                </Col>
            </Row>
        </Container>


    </>)
};

export default HelpSection;
