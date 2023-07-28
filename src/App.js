// import logo from './logo.svg';
import { styled } from "styled-components";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Overview } from "./components/Overview";
import { AdvertismentSection } from "./components/AdvertismentSection";
import { Footer } from "./components/Footer";
import "animate.css/animate.min.css";
import React from 'react';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


function App() {
  const ParentContainer = styled.div({
    padding: "0rem",
    margin: "0rem",
    width: "100%",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    flexWrap: "wrap",
    overflow: "scroll",
  });
  const EmptyContainer=styled.div({
    margin:'0rem',
    padding:'0rem',
    background:'#f1f1f1'
})
  return (
    <ParentContainer>
      <Navbar />
     
      <HeroSection />
      <Services />
      <Projects />
      <Overview />
      <AdvertismentSection/>
      <Footer/>
      <EmptyContainer/>
    </ParentContainer>
  );
}

export default App;
