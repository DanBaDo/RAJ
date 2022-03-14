import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import { getLogs } from "../libraries/request/APIRequests.js";

import trash from "../../img/trash.svg";
import casino from "../../img/casino.svg";
import online from "../../img/online.svg";
import user from "../../img/user.svg";

import {
  BotonClave,
  ElementData,
  PanelEventos,
} from "../component/IndexComponents";


export const Tests = () => {

  const { store, actions } = useContext(Context);
  const [ logsMockup, setLogrosMockup ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ totalPages, setTotlaPages ] = useState(0);

  useEffect (
    ()=> logsQuery(),
    []
  )

  function logsQuery (action) {
    switch (action) {
      case "next":
        if ( currentPage < totalPages ) {
          setCurrentPage(currentPage+1);
        } else {
          return;
        }
        break;
      case "prev":
        if ( page > 0 ) {
          setCurrentPage(currentPage-1);
        } else {
          return
        }
        break;
      default:
        setCurrentPage(0);
    }
    getLogs.query = currentPage;
    getLogs.onError = (error) => console.error(error)
    getLogs.onResponse = (response) => {
      console.log(response);
      setLogrosMockup(response.data);
      setMaxPages(response.pages);
    }
    getLogs.call()
  }

  return (
    <>
      <div className="text-center mt-5">
        <h1>BotonClave</h1>
          <BotonClave src={trash} handler={()=>{alert("Click!")}}/>
          <BotonClave src={trash} handler={()=>{alert("Click!")}} size="2.5em" padding="1.25em"/>
        <h1>ElementData</h1>
          <ElementData icon={casino} title="Casino Royal" description="editar perfil" time="mie" alert="false"/>
          <ElementData icon={online} title="Poker Fight" description="intento de acceso" time="2 May" alert="true"/>
        <h1>PanelEventos</h1>
          <PanelEventos arrayEventos={logsMockup} getPageHandler={logsQuery}/>
      </div>
    </>
  );
};
