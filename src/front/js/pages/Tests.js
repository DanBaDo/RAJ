import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {
  Baner,
  Gallery,
  InfoSection,
  Rajinfo,
  Footer,
  ButtonGradients,
  Message,
} from "../component/IndexComponents";

export const Tests = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="text-center mt-5">
        <Gallery />
        <Rajinfo />
        <InfoSection />
        <Baner />
        <Footer />
        <ButtonGradients name="click me" />
        <Message content="Hola, como estamos?" />
        <Message content="Hola, como estamos?" type="warning" />
        <Message content="Hola, como estamos?" type="error" />
      </div>
    </>
  );
};
