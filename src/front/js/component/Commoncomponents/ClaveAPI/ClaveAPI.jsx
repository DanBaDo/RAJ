import React, {useState} from "react";
import styled from 'styled-components';
import { Modal } from "react-bootstrap";

import {
    ElementData,
    BotonClave,
    BigQR,
 } from "../../IndexComponents.js";

import trash from "../../../../img/trash.svg";
import copy from "../../../../img/copy.svg"
import qr from "../../../../img/qr.svg"
import menu from "../../../../img/menu.svg";
import close from "../../../../img/close.svg"

const ClaveAPI = ({
    icon,
    title,
    description,
    time,
    url,
    trashClickHandler=()=>{},
    alert="false",
    showText=true
}) => {
    const Block = styled.div`
        border: none;
        background: none;
        display: flex;
        align-items: center;
        & > div {
            flex-grow: 1;
            display: flex;
            justify-content: end;
        }
    `

    const [ hideButtons, setHideButtons] = useState(true);
    const [ showQR, setShowQR ] = useState(false);

    const toggleButtons = () => {
        setHideButtons(! hideButtons)
    }
    const toggleQR = () => {
        setShowQR( ! showQR )
    }

    const ElementDataProps = {icon, title, description, time, alert, showText}
//                { showQR && <BigQR url={url} clickHandler={toggleQR}/> }

    return (
        <Block>
            <ElementData {...ElementDataProps} showText={ hideButtons }/>
            <div>
                { ! hideButtons && <BotonClave src={qr} handler={toggleQR}/>}
                { ! hideButtons && <BotonClave src={copy} handler={()=>navigator.clipboard.writeText(url)}/>}
                { ! hideButtons && <BotonClave src={trash} handler={trashClickHandler}/>}
                <BotonClave src={ hideButtons ? menu : close } handler={toggleButtons}/>
            </div>
            <Modal show={showQR} onHide={toggleQR}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <BigQR url={url} clickHandler={toggleQR}/>
                </Modal.Body>
            </Modal>
        </Block>
    );
};

export default ClaveAPI;
