import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ModalThanks = () =>{
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  
  
  return(
    <>
    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Registro Completado . . .</Modal.Title>
  </Modal.Header>
      
  <Modal.Body>
    <p>¡Gracias! por Ayudarnos Ayudar.
    &nbsp;
       <strong>RAJ</strong></p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" type="button" onClick={handleClick}>Home</Button>
  </Modal.Footer>
</Modal.Dialog>
</>
  )}


export default ModalThanks