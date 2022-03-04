import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {
  Gallery,
  Rajinfo,
  Footer,
  ButtonGradients,
  Message,
  Login
} from "../component/IndexComponents";
export const Tests = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="text-center mt-5">
        <Login/>
        <ButtonGradients name="click me" />
        <Message content="Hola, como estamos?" />
        <Message content="Hola, como estamos?" type="warning" />
        <Message content="Hola, como estamos?" type="error" />        
        <Gallery />
        <Rajinfo />
        <InfoSection />
        <Footer />
      </div>
    </>
  );
};
