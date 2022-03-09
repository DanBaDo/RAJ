import React, { useEffect, useState, useContext } from "react";
import { FaRegCopy, FaQrcode, FaTrash } from "react-icons/fa";
import BigQR from "../Commoncomponents/bigQR.jsx";
import { ListGroup, Col, Row, Modal, Container} from "react-bootstrap";

const ApiKey = (props) => {
  const [QRData, setQRData] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const bothFunction = () => {
    setQRData(props.url);
    handleShow();
  };
  return (
    <>
     <Container className="bg-white ">
        <Row >
          <Col xs={6} md={6} lg={6} className="text-left">
            {props.description}
          </Col>
          <Col xs={6} md={6} lg={6}>
            <FaRegCopy/>
            <div className="vr mx-2" />
            <FaQrcode
              onClick={() => {
                bothFunction();
              }}
            />
            <div className="vr mx-2" />
            <FaTrash />
          </Col>
          <Row>{props.installed === "0" ? "Pendiente" : "Instalado"}</Row>
        </Row>
      </Container> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        {QRData && (
          <BigQR
            url={QRData}
            close={() => {
              setQRData(null);
            }}
          />
        )}
      </Modal>
    </>
  );
};

export default ApiKey;
