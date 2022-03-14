import React, {useState} from "react";
import styled from 'styled-components';

import { ElementData, BotonClave } from "../../IndexComponents.js";

import trash from "../../../../img/trash.svg";
import copy from "../../../../img/copy.svg"
import qr from "../../../../img/qr.svg"
import close from "../../../../img/close.svg"

const ClaveAPI = (props) => {
    const Block = styled.div`
        border: none;
        background: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > img {
            height: 4rem;
            float: left;
            margin: 0.5rem;
        }
    `

    return (
        <Block>
            <ElementData {...props}/>
            <BotonClave  src={qr} handler={()=>{alert("Click!")}}/>
            <BotonClave  src={copy} handler={()=>{alert("Click!")}}/>
            <BotonClave  src={trash} handler={()=>{alert("Click!")}}/>
            <BotonClave  src={close} handler={()=>{alert("Click!")}}/>
        </Block>
    );
};

export default ClaveAPI;
