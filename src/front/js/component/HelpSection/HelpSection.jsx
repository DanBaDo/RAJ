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
                    <ContainerImg src="https://image.freepik.com/foto-gratis/primer-plano-mano-ofrecimiento-hombre-negocios-apreton-manos_1262-17295.jpg?w=740" alt="primer-plano-mano-ofrecimiento-hombre-negocios-apreton-manos" />
                </Col>
                <Col md={6} xs={12}>
                    <h3>Permitenos Ayudarte</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat 
                        recusandae iure, earum quos quam cupiditate doloribus quis, 
                        veniam vel soluta eos aut ipsa ipsam, modi perspiciatis facere optio. 
                        Saepe.</p>       
                </Col>
            </Row>
        </Container>


    </>)
};

export default HelpSection;
