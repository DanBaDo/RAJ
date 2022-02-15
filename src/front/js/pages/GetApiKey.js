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
  const [QRData, setQRData] = useState(null);

  const keysComponents = () => {
    return keys.map(
      (key, idx) => 
        <li key={idx}>
          API key {key.id}
          <FaRegCopy/>
          <FaQrcode onClick={()=>{setQRData(key.url)}}/>
          <FaTrash/>
        </li>
    )
  }

  useEffect(
    ()=>{
      /*getAPIKeys.onError = (error) => {
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
      getAPIKeys.call()*/
      setKeys(
        [
          {
            "id": 1,
            "key": "8ebfd8977b010655bfdd3c353c234e5e8472b6ac51c1ae1cab3fe06fad053beb",
            "url": "/apikey/8ebfd8977b010655bfdd3c353c234e5e8472b6ac51c1ae1cab3fe06fad053beb"
          },
          {
            "id": 2,
            "key": "53c234e5e8472b6ac51c1ae1cab3fe06fad053beb8ebfd8977b010655bfdd3c3",
            "url": "/apikey/53c234e5e8472b6ac51c1ae1cab3fe06fad053beb8ebfd8977b010655bfdd3c3"
          },
          {
            "id": 3,
            "key": "b6ac51c1ae1cab3fe06fad053beb8ebfd853c234e5e8472977b010655bfdd3c3",
            "url": "/apikey/b6ac51c1ae1cab3fe06fad053beb8ebfd853c234e5e8472977b010655bfdd3c3"
          }
        ]
      )
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
            { QRData && <BigQR url={QRData} close={()=>{setQRData(null)}}/> }
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default GetApiKey;
