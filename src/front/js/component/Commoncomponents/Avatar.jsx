import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../store/appContext.js";

const Avatar = () => {
const { store, actions } = useContext(Context);
const firstLetter = store.user.name[0]

  return (
    <AvatarStyled>
     <p>{firstLetter}</p>
    </AvatarStyled>
  )
}
const AvatarStyled = styled.div`
background-color:#1f2b5b;
border-radius:50%;
height:50px;
width:50px;
color:#fff;
text-align:center;
font-size:25px;
`

export default Avatar