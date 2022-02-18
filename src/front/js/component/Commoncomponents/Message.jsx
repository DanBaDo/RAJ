import React from 'react';
import styled from 'styled-components';
import "./Message.scss"
import { Col, Row } from 'react-bootstrap';

/**
 * Draw a info, 
 * @param {string} content - Contents
 * @param {string} [type=info] - Message type
 * @param {string} [buttonContent="Ok"]
 * @param {function} buttonAction - Handker for button click.
 * @returns 
 */
const Message = (props) => {
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
  }
  const Message = styled.div`${styles.hasOwnProperty(props.type) ?
    styles[props.type] : styles.info}`;
  return (
    <Message>
      <Row className="alert alert-danger d-flex align-items-center" role="alert">

        <Col>

          {props.content}
        </Col>
        <Col></Col>
        <Col></Col>
        <Col > <button onClick={props.buttonAction} className="button" type="submit">
          {props.buttonContent ? props.buttonContent : "Ok"}
        </button>
        </Col>

      </Row>
    </Message>
  )
};

export default Message;
