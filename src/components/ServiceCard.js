import { styled } from "styled-components";
import React, { Component } from "react";
import ImgSrc from "../assets/website.png";

export const ServiceCard = () => {
  //Parent Div Container
  const CardContainer = styled.div({
    background: "#010B1A",
    display: "flex",
    margin: "0rem",
    padding: "1.88rem",
    width: "20rem",
    justifyContent: "flexStart",
    flexDirection: "column",
    alignItems: "flexStart",
    gap: "2rem",
    background: "#1F1E1E",
    boxShadow: "1px -2px 6px 0.2px #bcbcbc",
    borderRadius: "0.4rem",
  });

  const CardImage = styled.div`
        background-image: url(${ImgSrc});
        width: 6rem;
        height: 4rem;
        background-size: contain;
        background-repeat: no-repeat;
        border-radius: 0.2rem;

        &:hover{
        transfrom:scale(8);
                          `;

  const TextContainer = styled.div({
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "flexStart",
    textAlign: "justify",
    color: "#bcbcbc",
  });

  const HeadingText = styled.div`
    padding: 0;
    marginbottom: 0rem;
    font-size: 1.8rem;
    color: #fcfcfc;
    line-height: 2rem;

    &:hover {
      background: -webkit-linear-gradient(
        0deg,
        rgba(34, 193, 195, 1) 0%,
        rgba(253, 187, 45, 1) 100%
      );
      // color:#FFF9F9;
      // font-size:2.2rem;
      cursor: pointer;
      // background: linear-gradient(304deg, #0B5C6C 0%, #BF49BB 61.98%, #CF0DA4 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;

  return (
    <CardContainer>
      <CardImage></CardImage>
      <TextContainer>
        <HeadingText>Web Design</HeadingText>
        <p>
          To help build able and efficient youth academic leadership to give
          direction on various national issues, especially focusing on the
          priority area issues.{" "}
        </p>
      </TextContainer>
    </CardContainer>
  );
};
