import React, { useState } from "react";
import QRCode from "qrcode.react";
import { Container } from "react-bootstrap";

const BigQR = (props) => {
  return (
    <Container>
      <QRCode style={{height:250, width:250, marginTop:20, marginBottom:20}} value={props.url} />
    </Container>
  );
};

export default BigQR;
