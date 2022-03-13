import React, {useState} from "react";
import styled from 'styled-components';

import casino from "../../../../img/casino.svg";
import online from "../../../../img/online.svg";
import user from "../../../../img/user.svg";

import { ElementData } from "../../IndexComponents.js";

const PanelEventos = ({arrayEventos}) => {

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

    const [ page, setPage ] = useState(0);

    const nextPage = () => {
        setPage(page+1);
    }

    const prevPage = () => {
        if (page > 0) setPage(page-1) 
    }

    const events = arrayEventos.map(
        eventData => {
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
            return <ElementData {...eventData}/>
        }
    )
    return (
        <Block>
            <p>Panel de eventos</p>
            <button onClick={ prevPage }>Anterior</button>
            {events}
            <button onClick={ nextPage }>Siguiente</button>
        </Block>
    );
};

export default PanelEventos;
