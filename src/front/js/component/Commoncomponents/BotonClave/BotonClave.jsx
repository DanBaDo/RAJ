import React from "react";
import styled from 'styled-components';

const BotonClave = ({src, handler, size="4rem", padding="1rem"}) => {
    const Boton = styled.button`
        width: ${size};
        height: ${size};
        border: none;
        padding: ${padding};
        background-color: var(--main-blue);
        & > img {
            width: 100%;
            height: auto;
        }
    `
    return (
        <Boton onClick={handler}>
            <img src={src} alt="Button" />
        </Boton>
    );
};

export default BotonClave;
