import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {
  Baner,
  Gallery,
  InfoSection,
  Rajinfo,
  Footer,
} from "../component/IndexComponents";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="text-center mt-5">
        <Gallery />
        <Rajinfo />
        <InfoSection />
        <Baner />
        <Footer />
      </div>
    </>
  );
};
