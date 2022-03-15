import React, {useState, useEffect} from "react";
import styled from 'styled-components';

import up from "../../../../img/up.svg";
import down from "../../../../img/down.svg";
import casino from "../../../../img/casino.svg";
import online from "../../../../img/online.svg";
import user from "../../../../img/user.svg";

import { ClaveAPI } from "../../IndexComponents.js";

import { getAPIKeys, createAPIKeys } from "../../../libraries/request/APIRequests";

const PanelClavesAPI = () => {

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

    const [keys, setKeys] = useState([]);

    const nextPage = () => {
        getPageHandler("next");
    }

    const prevPage = () => {
        getPageHandler("prev");
    }

    const keysComponents = () => {
        return keys.map((key, idx) => (
          <ClaveAPI
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

    useEffect(() => {
        getAPIKeys.onError = (error) => {
          actions.addError(error);
        };
        getAPIKeys.onResponse = (response) => {
          try {
            switch (response.code) {
              case 200:
                const keys = response.contents.data.map((key, idx) => {
                  key.show = false;
                  return key;
                });
                setKeys(keys);
                break;
              case 403:
                actions.addError("Autentication error getting API keys list", "/");
                break;
              default:
                actions.addError("Unexpected error getting API keys list", "/");
            }
          } catch (error) {
            actions.addError(error);
          }
        };
        getAPIKeys.call();
      }, []);

    return (
        <Block>
            <p>Panel de claves API</p>
            <ol>
                {keysComponents()}
            </ol>          
        </Block>
    );
};

export default PanelClavesAPI;
