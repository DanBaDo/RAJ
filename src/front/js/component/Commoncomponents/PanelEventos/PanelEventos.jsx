import React, {useState} from "react";
import styled from 'styled-components';

import up from "../../../../img/up.svg";
import down from "../../../../img/down.svg";
import casino from "../../../../img/casino.svg";
import online from "../../../../img/online.svg";
import user from "../../../../img/user.svg";

import { ElementData } from "../../IndexComponents.js";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";

const PanelEventos = ({arrayEventos, getPageHandler, currentPage}) => {

    const Block = styled.div`
            border: none;
            background: none;
            padding: 0.5rem;
            margin: 0.5rem;
            & > ol {
                list-style: none;
                min-height: 30rem;
            }
            & > p {
                font-size: 3rem;
            }
            & > .noButton {
                visibility: hidden;
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
            <img src={up}
                alt="Previous page"
                onClick={ prevPage }
                className={currentPage === "start" ? "noButton" : ""}
            />
            <ol>
                {events}
            </ol>
            <img src={down}
                alt="Next page"
                onClick={ nextPage }
                className={currentPage === "end" ? "noButton" : ""}
            />
            
        </Block>
    );
};

export default PanelEventos;
