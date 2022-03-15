import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import {Logo} from "../IndexComponents.js"

/**
 * Draw a info,
 * @param {string} content - Contents
 * @param {string} [type=info] - Message type
 * @param {string} [buttonContent="Ok"]
 * @param {function} buttonAction - Handker for button click.
 * @returns
 */
const Message = (props) => {
  
  const Message = styled.div`
    ${styles.hasOwnProperty(props.type) ? styles[props.type] : styles.info}
  `;
  return (
    <Message>
      <Row
        className="alert alert-danger d-flex align-items-center flex-column text-center"
        role="alert"
      >
        <Col><Logo/></Col>
        <Col>{props.content}</Col>
        <Col>
          {" "}
          <button
            onClick={props.buttonAction}
            className="buttonlogin"
            type="submit"
          >
            {props.buttonContent ? props.buttonContent : "Ok"}
          </button>
        </Col>
      </Row>
    </Message>
  );
};
const styles = {
  info: `
  padding: 3em;
  margin: 1em;
  font-size: x-large;
  text-align: left;
  border-radius: 1em;
  color:white;
`,
  warning: `
  padding: 3em;
  margin: 1em;
  font-size: x-large;
  text-align: left;
  border-radius: 1em;
`,
  error: `
  padding: 3em;
  margin: 1em;
  font-size: x-large;
  text-align: left;
  border-radius: 1em;
`,
};
export default Message;
