import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const Jumbotron = () => {
    const MyVideo = styled.video`
         position: fixed;
         height: 100vh;
         width: 100vw;
    `
    return (
        <Container>
            <MyVideo src='https://www.youtube.com/watch?v=zlRl8sJU_4I' autoplay loop></MyVideo>
        </Container>
    )
};

export default Jumbotron;
