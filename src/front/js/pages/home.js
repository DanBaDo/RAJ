import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {
  AboutUsSection,
  Gallery,
  Rajinfo,
  HelpSection,
  Footer,
  ApiKey,
  HeroSection,
  Testimonials,
  MeetUs,
} from "../component/IndexComponents";


export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
     
        <Gallery/>
        <MeetUs/>
        <Testimonials/>
        <Footer />
  
    </>
  );
};
