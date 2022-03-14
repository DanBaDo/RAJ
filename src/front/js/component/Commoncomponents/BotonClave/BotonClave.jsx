import React from "react";
import styled from 'styled-components';

const BotonClave = ({src, handler, size="2em", padding="1em"}) => {
    const Boton = styled.button`
        border: none;
        padding: ${padding};
        background-color: var(--main-blue);
        & > img {
            width: ${size};
        }
    `
    return (
        <Boton onClick={handler}>
            <img src={src} alt="Button" />
        </Boton>
    );
};

export default BotonClave;
