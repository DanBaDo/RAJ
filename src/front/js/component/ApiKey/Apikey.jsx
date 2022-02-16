
import React, { useEffect, useState, useContext } from "react";
import { FaRegCopy, FaQrcode, FaTrash } from "react-icons/fa";
import BigQR from "../Commoncomponents/bigQR.jsx";
import { ListGroup, Col, Row, CloseButton, } from 'react-bootstrap';

const ApiKey = (props) => {
    const [QRData, setQRData] = useState(null);
    const handleClose = () => setShow(false);
    return (
        <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col xs={4} md={8} >{props.id}.Dispositivo activo</Col>
                    <Col xs={2} md={1}><FaRegCopy /></Col>
                    <Col xs={2} md={1}><FaQrcode onClick={() => { setQRData(props.url) }} /></Col>
                    <Col xs={2} md={1}><FaTrash /></Col>
                    <Col xs={2} md={1}><CloseButton onClick={handleClose} /></Col>
                </Row>



            </ListGroup.Item>
            {QRData && <BigQR url={QRData} close={() => { setQRData(null) }} />}
        </ListGroup>
    )

};


export default ApiKey;