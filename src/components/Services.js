import { styled } from "styled-components";
import React, { Component } from "react";
import ImgSrc from "../assets/bishalHadaPic.png";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  //Parent Div Container
  const ServicesContainer = styled.div({
    background: "#010B1A",
    display: "flex",
    margin: "0rem",
    padding: "0rem",
    height: "80vh",
    justifyContent: "flexStart",
    flexDirection: "column",
    alignItems: "center",
    gap: "8rem",
  });
  const CardContainer = styled.div({
    margin: "0rem",
    padding: "0rem",
    display: "flex",
    justifyContent: "flexStart",
    alignItems: "center",
    gap: "2rem",
  });

  const TextContainer = styled.div({
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
    color: "#bcbcbc",
  });

  const HeadingText = styled.div`
    padding: 0;
    marginbottom: 0rem;
    font-size: 3rem;
    color: #fcfcfc;
    line-height: 4rem;
    background: linear-gradient(
      304deg,
      #0b5c6c 0%,
      #bf49bb 61.98%,
      #cf0da4 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  return (
    <ServicesContainer>
      <TextContainer>
        <HeadingText>Look at My Services</HeadingText>
        <p>
          If you are looking for someone who will help you to build your digital
          web presence than congratulations!
        </p>
      </TextContainer>
      <CardContainer>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </CardContainer>
    </ServicesContainer>
  );
};
