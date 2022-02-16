
import React, { useEffect, useState, useContext } from "react";
import { FaRegCopy, FaQrcode, FaTrash } from "react-icons/fa";
import BigQR from "../Commoncomponents/bigQR.jsx";
import { ListGroup } from 'react-bootstrap';

const ApiKey = (props) => {
    const [QRData, setQRData] = useState(null);
    return (
        <ListGroup>
            <ListGroup.Item>
                API key {props.id}
                <FaRegCopy />
                <FaQrcode onClick={() => { setQRData(props.url) }} />
                <FaTrash />
            </ListGroup.Item>
            {QRData && <BigQR url={QRData} close={() => { setQRData(null) }} />}
        </ListGroup>
    )

};


export default ApiKey;