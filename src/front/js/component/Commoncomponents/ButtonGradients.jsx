import React from 'react';
import styled from 'styled-components';

const ButtonGradients = (props) => {
    const MyBotoncito = styled.button`
        padding: 1%;
        background-color: aquamarine;
        border-radius: 5px;
        color:#fff;
    `
  return (
    <MyBotoncito>{props.name}</MyBotoncito>
  )
};

export default ButtonGradients;
