import React, { useState } from "react";
import styled from 'styled-components';

import QRCode from "qrcode.react";

const BigQR = ({url, clickHandler}) => {
  const Block = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: white;
  `
  return (
    <Block onClick={clickHandler}>
      <QRCode style={{height:250, width:250, marginTop:20, marginBottom:20}} value={url} />
    </Block>
  );
};

export default BigQR;
