import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalThanks = () =>{
  
  return(
    <>
    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Registro Completado</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p></p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
</>
  )}


export default ModalThanks