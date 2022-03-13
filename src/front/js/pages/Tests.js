import React, { useContext } from "react";
import { Context } from "../store/appContext";

import trash from "../../img/trash.svg";
import casino from "../../img/casino.svg";
import online from "../../img/online.svg";

import { BotonClave, ElementData } from "../component/IndexComponents";

const logrosMocup = [
  {
    icon: "user",
    title: "Tú misma",
    description: "editar perfil",
    time: "12:45",
    alert: "false",
  },
  {
    icon: "casino",
    title: "Casino Royal",
    description: "intento de acceso",
    time: "mie",
    alert: "true",
  },
  {
    icon: "online",
    title: "Poker Figth",
    description: "intento de acceso",
    time: "7 May",
    alert: "true",
  },
  {
    icon: "online",
    title: "Bet Hero",
    description: "intento de acceso",
    time: "2 May",
    alert: "true",
  },
  {
    icon: "user",
    title: "Tú misma",
    description: "editar perfil",
    time: "30/12/2021",
    alert: "false",
  },
  {
    icon: "user",
    title: "Tú misma",
    description: "inicio de sesión",
    time: "30/12/2021",
    alert: "false",
  },
]

export const Tests = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="text-center mt-5">
        <h1>BotonClave</h1>
          <BotonClave src={trash} handler={()=>{alert("Click!")}}/>
          <BotonClave src={trash} handler={()=>{alert("Click!")}} size="2.5em" padding="1.25em"/>
        <h1>ElementData</h1>
          <ElementData icon={casino} title="Casino Royal" description="editar perfil" time="mie" alert="false"/>
          <ElementData icon={online} title="Poker Fight" description="intento de acceso" time="2 May" alert="true"/>
      </div>
    </>
  );
};
