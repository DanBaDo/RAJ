import React from 'react';
import styled from 'styled-components';

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
    background: #99f;
    border-radius: 1em;
  `,
    warning: `
    padding: 3em;
    margin: 1em;
    font-size: x-large;
    text-align: left;
    background: #ff9;
    border-radius: 1em;
  `,
    error: `
    padding: 3em;
    margin: 1em;
    font-size: x-large;
    text-align: left;
    background: #f99;
    border-radius: 1em;
  `,
  }
  const Message = styled.div`${styles.hasOwnProperty(props.type) ?
    styles[props.type] : styles.info}`;
  return (
    <Message>
      {props.content}
      <button onClick={props.buttonAction}>
        {props.buttonContent ? props.buttonContent : "Ok"}
      </button>
    </Message>
  )
};

export default Message;
