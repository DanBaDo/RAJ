
import React, { useEffect, useState, useContext } from "react";
import { FaRegCopy, FaQrcode, FaTrash } from "react-icons/fa";
import BigQR from "../Commoncomponents/bigQR.jsx";
import { ListGroup, Col, Row, } from 'react-bootstrap';

const ApiKey = (props) => {
    const [QRData, setQRData] = useState(null);
    const handleClose = () => setShow(false);
    return (
        <ListGroup>
            <ListGroup.Item>
                
                <Row>
                    <Col sm={6} lg={10} >{props.id}.Dispositivo activo</Col>
                    <Col sm={2} lg={1}></Col>
                    <Col sm={4} lg={1}><FaRegCopy /><FaQrcode onClick={() => { setQRData(props.url) }} /><FaTrash /></Col>
                 </Row>   

            </ListGroup.Item>
            {QRData && <BigQR url={QRData} close={() => { setQRData(null) }} />}
        </ListGroup>
    )

};


export default ApiKey;