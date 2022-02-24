import React, { useEffect, useState, useContext } from "react";
import { FaRegCopy, FaQrcode, FaTrash } from "react-icons/fa";
import BigQR from "../Commoncomponents/bigQR.jsx";
import { ListGroup, Col, Row, Modal } from "react-bootstrap";

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
      <ListGroup>
        <ListGroup.Item>
          <Col sm={10} lg={10}>
            {props.id}.Dispositivo activo
          </Col>
          <Col sm={2} lg={1}>
            <FaRegCopy />
            <FaQrcode
              onClick={() => {
                bothFunction();
              }}
            />
            <FaTrash />
          </Col>
        </ListGroup.Item>
      </ListGroup>
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
