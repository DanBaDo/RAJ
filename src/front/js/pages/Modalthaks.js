import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ModalThanks = () =>{
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  
  
  return(
    <>
    <Container className="justify-content-center">
    <Modal.Dialog  className="thanksp">
  <Modal.Header closeButton>
    <Modal.Title>Registro Completado . . .</Modal.Title>
  </Modal.Header>
      
  <Modal.Body >
    <p>¡Gracias! por ayudarnos a ayudar.
    &nbsp;
       <strong>RAJ</strong></p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" type="button" onClick={handleClick}>Home</Button>
  </Modal.Footer>
</Modal.Dialog>
</Container>
</>
  )}


export default ModalThanks