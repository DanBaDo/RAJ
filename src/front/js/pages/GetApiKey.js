import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import styled from "styled-components";
import { getAPIKeys } from "../libraries/request/APIRequests";
import { Container, Row, Col } from "react-bootstrap";

import Apikey from "../component/ApiKey/Apikey.jsx";
import "./GetApiKey.scss";

const GetApiKey = () => {
  const { store, actions } = useContext(Context);
  const [keys, setKeys] = useState([]);
  const [QRData, setQRData] = useState(null);

  const keysComponents = () => {
    return keys.map((key, idx) => (
      <Apikey id={key.id} url={key.url} key={idx}></Apikey>
    ));
  };

  useEffect(() => {
    getAPIKeys.onError = (error) => {
        actions.addError(error);
      }
      getAPIKeys.onResponse = (response) => {
        try {
          switch (response.code) {
            case 200:
              const keys = response.contents.data.map(
                (key, idx) => {
                  key.show = false;
                  return key;
                }
              );
              setKeys(keys);
              break;
            case 403:
              throw "Autentication error getting API keys list";
              break;
            default:
              throw "Unexpected error getting API keys list";
              break;
          };
        } catch (error) {
          actions.addError(error);
        }
      };
      getAPIKeys.call()
    }, []);

  return (
    <>
      <Container >
        <Row className="justify-content-center">
          <Col>
          <Col >
            <h1 className="TitleApi">Dispositivos Permitidos</h1>
            <ul>{keysComponents()}</ul>
          </Col>
          <Col></Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GetApiKey;
