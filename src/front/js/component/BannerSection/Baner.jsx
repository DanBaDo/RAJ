import React from 'react';
import {Container, Row, Button} from "react-bootstrap";

const Baner = () => {
  return (<>
    <Container>
        <Row className='m-0 justify-content-center align-items-center'>
            <Container className='bg-danger p-5 text-center rounded'>
                <h3>Crees que tienes un problema</h3>
                <Button>Contactanos</Button>
            </Container>
        </Row>
    </Container>
  </>);
};

export default Baner;
