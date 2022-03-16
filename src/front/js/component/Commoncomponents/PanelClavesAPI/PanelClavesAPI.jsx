import React, {useState, useEffect} from "react";
import styled from 'styled-components';

import up from "../../../../img/up.svg";
import down from "../../../../img/down.svg";
import casino from "../../../../img/casino.svg";
import online from "../../../../img/online.svg";
import user from "../../../../img/user.svg";

import { ClaveAPI } from "../../IndexComponents.js";

const PanelClavesAPI = ({keys}) => {

    const Block = styled.div`
            border: none;
            background: none;
            padding: 0.5rem;
            margin: 0.5rem;
            text-align: center;
            & > ol {
                list-style: none;
                min-height: 30rem;
                padding: 0px;
            }
            & > p {
                font-size: 3rem;
            }
            & > .noButton {
                visibility: hidden;
            }
        `

    //const [keys, setKeys] = useState([]);

    const keysComponents = () => {
        return keys.map((key) => (
          <ClaveAPI
            key={key.key}
            icon={key.icon === "casino" ? casino : online}
            title={key.title}
            description={key.description}
            time={key.time}
            alert={key.description === "instalada" ? "false" : "true"}
            url={key.url}
            trashClickHandler={()=>{console.log("Add remove handler")}}
          />
        ));
    };

    return (
        <Block>
            <p>Claves API</p>
            <ol>
                {keysComponents()}
            </ol>          
        </Block>
    );
};

export default PanelClavesAPI;
