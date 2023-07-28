import { styled } from "styled-components";
import React, { Component } from "react";
import ImgSrc from "../assets/graph.png";
import { ServiceCard } from "./ServiceCard";

export const Overview = () => {
  //Parent Div Container
  const OverviewContainer = styled.div({
    background: "#010B1A",
    display: "flex",
    margin: "0rem",
    paddingTop: "6rem",
    height: "94vh",
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

  const OverviewImage = styled.div`
    background-image: url(${ImgSrc});
    width: 90%;
    height: 60rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 2% 1%;
    border-radius: 0.2rem;
    padding: 0rem;
    margin: 0rem;
  `;

  return (
    <OverviewContainer>
      <TextContainer>
        <HeadingText>Overview</HeadingText>
        <p>Timeline of my journey towards Designing Fields</p>
      </TextContainer>
      <OverviewImage></OverviewImage>
    </OverviewContainer>
  );
};
