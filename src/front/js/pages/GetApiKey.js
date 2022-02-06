import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import styled from "styled-components";
import { getAPIKeys } from "../libraries/request/APIRequests";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegCopy, FaQrcode, FaTrash } from "react-icons/fa"

const GetApiKey = () => {
  const { store, actions } = useContext(Context);
  const [elements, setElements] = useState([]);
  useEffect(
    ()=>{
      getAPIKeys.onError = (error) => {
        actions.addError(error);
      }
      getAPIKeys.onResponse = (response) => {
        try {
          switch (response.code) {
            case 200:
              const elem = response.contents.data.map(
                (key) => <li key={key.id}>API key {key.id} <FaRegCopy/><FaQrcode/><FaTrash/></li>
              );
              setElements(elem);
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
    },
    []
  );


  return (
    <>
      <Container>
        <Row className="m-0 vh-100 justify-content-center align-items-center">
          <Col>
            <h1>Lista de dispositivos con acceso</h1>
            <ul>
                { elements }
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GetApiKey;
