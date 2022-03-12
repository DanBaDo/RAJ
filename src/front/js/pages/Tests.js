import React, { useContext } from "react";
import { Context } from "../store/appContext";

import trash from "../../img/trash.svg";

import { BotonClave } from "../component/IndexComponents";
export const Tests = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="text-center mt-5">
        <h1>BotonClave</h1>
        <BotonClave src={trash} handler={()=>{alert("Click!")}}/>
        <BotonClave src={trash} handler={()=>{alert("Click!")}} size="2.5em" padding="1.25em"/>
      </div>
    </>
  );
};
