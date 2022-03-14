import React, {useState} from "react";
import styled from 'styled-components';

import { ElementData, BotonClave } from "../../IndexComponents.js";

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
    qrClickHandler=()=>{},
    copyClickHandler=()=>{},
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

    const toggleButtons = () => {
        setHideButtons(! hideButtons)
    }

    const ElementDataProps = {icon, title, description, time, alert, showText}

    return (
        <Block>
            <ElementData {...ElementDataProps} showText={ hideButtons }/>
            <div>
                { ! hideButtons && <BotonClave src={qr} handler={qrClickHandler}/>}
                { ! hideButtons && <BotonClave src={copy} handler={copyClickHandler}/>}
                { ! hideButtons && <BotonClave src={trash} handler={trashClickHandler}/>}
                <BotonClave src={ hideButtons ? menu : close } handler={toggleButtons}/>
            </div>
        </Block>
    );
};

export default ClaveAPI;
