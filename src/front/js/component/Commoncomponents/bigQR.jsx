import React, { useState } from "react";
import styled from "styled-components";
import QRCode from "qrcode.react";

const BigQR = (props) => {
    const BigQR = styled.div`
        position: fixed;
        width: 80vw;
        height: 80vh;
        z-index: 100;
        top: 50px;
    `
    return (
        <BigQR>
            <QRCode value={props.url} />
            <button onClick={props.close}>Cerrar</button>
        </BigQR>
    )
}

export default BigQR
