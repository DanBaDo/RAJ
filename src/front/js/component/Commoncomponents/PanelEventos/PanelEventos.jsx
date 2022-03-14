import React, {useState} from "react";
import styled from 'styled-components';

import up from "../../../../img/up.svg";
import down from "../../../../img/down.svg";
import casino from "../../../../img/casino.svg";
import online from "../../../../img/online.svg";
import user from "../../../../img/user.svg";

import { ElementData } from "../../IndexComponents.js";

const PanelEventos = ({arrayEventos, getPageHandler, currentPage}) => {

    const Block = styled.ol`
            border: none;
            background: none;
            padding: 0.5rem;
            list-style: none;
            margin: 0.5rem;
            & > p {
                font-size: 3rem;
            }
        `

    const nextPage = () => {
        getPageHandler("next");
    }

    const prevPage = () => {
        getPageHandler("prev");
    }

    const events = arrayEventos.map(
        (eventData, idx) => {
            switch (eventData.icon) {
                case "casino":
                    eventData.icon = casino;
                    break;
                case "online":
                    eventData.icon = online;
                    break;
                case "user":
                    eventData.icon = user;
                    break;
            } 
            return <ElementData key={idx} {...eventData}/>
        }
    )
    return (
        <Block>
            <p>Panel de eventos</p>
            <img src={up} alt="Previous page" onClick={ prevPage }/>
            {events}
            <img src={down} alt="Next page" onClick={ nextPage }/>
        </Block>
    );
};

export default PanelEventos;
