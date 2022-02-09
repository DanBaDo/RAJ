import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import styled from "styled-components";
import { getAPIKeys } from "../libraries/request/APIRequests";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegCopy, FaQrcode, FaTrash } from "react-icons/fa";
import BigQR from "../component/Commoncomponents/bigQR.jsx";

const GetApiKey = () => {
  const { store, actions } = useContext(Context);
  const [keys, setKeys] = useState([]);

  const toggleKey = (idx) => {
    const elem = [...keys];
    elem[idx].show = ! elem[idx].show;
    setKeys(elem);
  }

  const keysComponents = () => {
    return keys.map(
      (key, idx) => 
        <li key={key.idx}>
          API key {key.id}
          <FaRegCopy/>
          <FaQrcode onClick={()=>toggleKey(idx)}/>
          <FaTrash/>
          { keys[idx].show && <BigQR url={key.url}/>}
        </li>
    )
  }

  useEffect(
    ()=>{
      getAPIKeys.onError = (error) => {
        actions.addError(error);
      }
      getAPIKeys.onResponse = (response) => {
        try {
          switch (response.code) {
            case 200:
              const keys = response.contents.data.map(
                (key, idx) => key.show = false
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
                { keysComponents() }
            </ul>
            {}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GetApiKey;
