import React, {useState} from "react";
import styled from 'styled-components';

import graph from "../../../../img/graph.png";

import { ElementData } from "../../IndexComponents.js";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";

const PanelLogros = ({arrayEventos, getPageHandler, currentPage}) => {

    const Block = styled.div`
            border: none;
            background: none;
            padding: 0.5rem;
            margin: 0.5rem;
            text-align: center;
            & p {
                font-size: 2rem;
            }
            & .seeMe {
                font-size: 4rem;
                align-self: flex-end;
            }
            & p.title {
                font-size: 3rem;
            }
            & .right {
                text-align: right;
            }
            & .backBlue {
                background-color: var(--main-blue);
                color: white;
            } 
            & .graph {
                color: var(--main-blue);
                padding-top: 0px !important;
                min-height: 20rem;
                background-image: url(${graph});
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
            & .pannel {
                padding: 2rem;
                margin: 1rem;
            }
            & .graph > p {
                margin: 0px
            }
            & .row {
                display: flex;
                flex-wrap: nowrap;
            }
            & .row > * {
                flex-shrink: 1;
            }
        `
    return (
        <Block>
            <div className="backBlue money pannel">
                <p className="title right">Logros</p>
                <div className="row">
                    <p>Estimamos que has ahorrado</p>
                    <p className="seeMe">1400€</p>
                </div>
            </div>
            <div className="graph pannel">
                <p className="title right">Tu evolución</p>
                <p className="right">de acceso al juego</p>
            </div>
        </Block>
    );
};

export default PanelLogros;
