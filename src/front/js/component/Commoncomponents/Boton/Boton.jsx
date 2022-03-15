import React from 'react';
import styled from 'styled-components';

const Boton = () => {
  return (
    <ButtonUser></ButtonUser>
  )
}
const ButtonUser = styled.a`
	background-color:#1f2b5b;
	border:1px solid #314179;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:'Ubuntu Condensed', sans-serif !important;
	font-size:18px;
	font-weight:bold;
	padding:9px 31px;
	text-decoration:none;

    &:hover{
        background:linear-gradient(to bottom, #5972a7 5%, #637aad 100%);
	    background-color:#5972a7;
    }
    &:active{
        position:relative;
	    top:1px;
    }

`
export default Boton