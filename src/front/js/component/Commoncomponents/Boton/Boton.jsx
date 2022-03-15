import React from 'react';
import styled from 'styled-components';

const ButtonUser = styled.button`
	background-color: var(--main-blue);
	border: none;
	display: inline-block;
	color: white;
	font-size: 1.5rem;
	padding: 11px 0px 11px 0px;
	width: 14rem;
    &:active{
        position:relative;
	    top:1px;
    }
`
	const Boton = ({children, onClick}) => {
		return (
			<ButtonUser onClick={onClick}>
				{children}
			</ButtonUser>
		)
	}

export default Boton