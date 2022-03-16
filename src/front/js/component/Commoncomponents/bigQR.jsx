import React, { useState } from "react";
import styled from 'styled-components';

import QRCode from "qrcode.react";

const BigQR = ({url, clickHandler}) => {
  const Block = styled.div`
    width: 100%;
    height: 100%;
    margin: 5rem 0px;
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
