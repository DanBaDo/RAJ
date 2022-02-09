import React from 'react';
import styled from 'styled-components';



const AdrianComponent = () => {
    const ButtonAdrian = styled.button`
        padding: 1%;
        color:white;
        background-color:red;
        border-radius:21%;
        
        &:hover{
            box-shadow:10px 10px black;
        }
    `

  return (


    <ButtonAdrian>Click Me please</ButtonAdrian>

  );
};

export default AdrianComponent;
