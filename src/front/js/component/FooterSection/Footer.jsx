import React from 'react';
import { Container, Nav} from 'react-bootstrap';

const Footer = () => {
  return (<>
    <Container>
    <Nav className='bg-dark'
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
</Nav>









    </Container>
  
  
  
  
  
  </>);
};

export default Footer;
