import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {
  Gallery,
  Footer,
  ApiKey,
  Testimonials,
  MeetUs,
  Rajinfo,
} from "../component/IndexComponents";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Gallery />
      <MeetUs />
      <Rajinfo />
      <Testimonials />
      <Footer />
    </>
  );
};
