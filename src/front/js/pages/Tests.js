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
  const [ totalPages, setTotalPages ] = useState(Infinity);

  useEffect (
    ()=> {
      getLogs.query = currentPage;
      getLogs.onError = (error) => console.error(error)
      getLogs.onResponse = (response) => {
        setLogrosMockup(response.contents.data);
        setTotalPages(response.contents.pages);
      }
      getLogs.call()
    },
    [currentPage]
  )

  function logsQuery (action) {
    switch (action) {
      case "next":
        if ( currentPage < totalPages-1 ) {
          setCurrentPage(prevCurrentPage => prevCurrentPage+1);
        }
        break;
      case "prev":
        if ( currentPage > 0 ) {
          setCurrentPage(prevCurrentPage => prevCurrentPage-1);
        }
        break;
    }
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
          <PanelEventos arrayEventos={logsMockup} getPageHandler={logsQuery} currentPage={currentPage === 0 && "start" || currentPage === totalPages-1 && "end"}/>
      </div>
    </>
  );
};
