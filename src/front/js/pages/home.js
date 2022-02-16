import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {
  AboutUsSection,
  Gallery,
  Rajinfo,
  HelpSection,
  Footer,
  ApiKey,
} from "../component/IndexComponents";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="text-center mt-5">
        <Gallery />
        <AboutUsSection/>
         <Rajinfo />
        <HelpSection/>
        <Footer />
        <ApiKey/>
      </div>
    </>
  );
};
