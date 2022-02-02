import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
const GetApiKey = () => {
  //     const {elements, setElements} = useState([]);
  // //getAPIKeys.data = ""
  // getAPIKeys.onErrror = (error)=>console.error(error);
  // getAPIKeys.onResponse = (response)=>{
  //     if (response.code === 200 ) {
  //         const elem = response.contents.data.map(
  //             (key) => <li>id: ${key.id}</li>
  //         );
  //         setElements(elem);
  //     }
  // };
  // getAPIKeys.call()
  const UlistContainer = styled.ul`
    background-color: yellow;
    width: 100%;
    height: auto;
    list-style: none;
  `;
  const ItemList = styled.li`
    border: 1px solid black;
    margin-bottom: 1em;
    padding:1em;
    

  `

  return (
    <>
      <Container>
        <Row className="m-0 vh-100 justify-content-center align-items-center">
          <Col>
            <h1>Lista de dispositivos con acceso</h1>
            <UlistContainer>
                <ItemList>get Api key 1</ItemList>
                <ItemList>get Api key 2</ItemList>
                
            </UlistContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GetApiKey;
