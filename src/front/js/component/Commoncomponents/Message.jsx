import React from 'react';
import styled from 'styled-components';

const Message = (props) => {
    const Message = styled.div`
      padding: 3em;
      margin: 1em;
      font-size: x-large;
      text-align: left;
      background: #eef;
      border-radius: 1em;
    `
  return (
    <Message>{props.content}</Message>
  )
};

export default Message;
