import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import styled from "styled-components";
import { getAPIKeys } from "../libraries/request/APIRequests";
import { Container, Row, Col, Button } from "react-bootstrap";
import Apikey from "../component/ApiKey/Apikey.jsx";


const GetApiKey = () => {
  const { store, actions } = useContext(Context);
  const [keys, setKeys] = useState([]);
  const [QRData, setQRData] = useState(null);

  // Styled zone ---------------------------
  const TitleStyled = styled.h1`
    text-align: center;
    font-size: 60px;
    color: white;
    text-decoration: underline #22aa99;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  `;

  // ---------------------------------------

  const keysComponents = () => {
    return keys.map((key, idx) => (
      <Apikey id={key.id} url={key.url} key={idx}></Apikey>
    ));
  };

  useEffect(() => {
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
    setKeys([
      {
        id: 1,
        key: "8ebfd8977b010655bfdd3c353c234e5e8472b6ac51c1ae1cab3fe06fad053beb",
        url: "/apikey/8ebfd8977b010655bfdd3c353c234e5e8472b6ac51c1ae1cab3fe06fad053beb",
      },
      {
        id: 2,
        key: "53c234e5e8472b6ac51c1ae1cab3fe06fad053beb8ebfd8977b010655bfdd3c3",
        url: "/apikey/53c234e5e8472b6ac51c1ae1cab3fe06fad053beb8ebfd8977b010655bfdd3c3",
      },
      {
        id: 3,
        key: "b6ac51c1ae1cab3fe06fad053beb8ebfd853c234e5e8472977b010655bfdd3c3",
        url: "/apikey/b6ac51c1ae1cab3fe06fad053beb8ebfd853c234e5e8472977b010655bfdd3c3",
      },
    ]);
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Col md={10} xl={10}>
              <TitleStyled>Dispositivos Permitidos</TitleStyled>{" "}
            </Col>
            <Col md={2} xl={2}>
              <Button className="btn btn-primary">Añadir</Button>
            </Col>
            <Col>
              <ul>{keysComponents()}</ul>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GetApiKey;
