import React, { useState } from "react";
import styled from "styled-components";
import QRCode from "qrcode.react";


const BigQR = (props) => {
    const BigQR = styled.div` 
        width: 100%;
        height: 80vh;   
    `
    return (
        <BigQR>
            <QRCode value={props.url} />
        </BigQR>
    )
}

export default BigQR
