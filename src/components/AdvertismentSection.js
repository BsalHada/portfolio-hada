import { styled } from "styled-components";
import React, { Component } from "react";
import ImgSrc from "../assets/ads.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AdvertismentSection = () => {
  //Parent Div Container
  const AdvertismentContainer = styled.div({
    background: "#F7F7F9",
    display: "flex",
    margin: "0rem",
    padding: "0rem",
    width: "100vw",
    justifyContent: "flexStart",
    flexDirection: "column",
    alignItems: "center",
    gap: "8rem",
  });
  const BackgroundContainer = styled.div`
    display: flex;
    margin-top: 6rem;
    margin-bottom: 6rem;

    justify-content: space-around;
    flex-direction: row;
    align-items: center;

    width: 100vw;
    height: 16rem;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(130deg, #454545 0%, #7d5e4f 50%, #bf9b79 100%);
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
    gap: "-1rem",
  });

  const HeadingText = styled.div`
    padding: 0;
    marginbottom: 0rem;
    font-size: 2rem;
    color: #ffd400;
    line-height: 4rem;
  `;
  const SecondaryText = styled.div`
    padding: 0;
    marginbottom: 0rem;
    font-size: 1.4rem;
    color: #ffffff;
    line-height: 4rem;
  `;

  const AdvertismentImage = styled.div`
    background-image: url(${ImgSrc});
    width: 20rem;
    height: 17rem;
    // position: absolute;
    // right: 20.8125rem;

    background-size: cover;
    background-repeat: no-repeat;
    // background-position: 2% 1%;
    border-radius: 0.2rem;
    padding: 0rem;
    margin: 0rem;
  `;
  const ContactMeButton = styled.div`
  width:8rem;
  height:2.5rem;
  background-color:none;

  color:#f1f1f1;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:0.2rem;
  font-size:1.1rem;
  background: linear-gradient(90deg, #30063E 12.38%, #9F0373 100%);
   color:#FCFCFC;
   border:none;
   cursor:pointer;
   
  // &:hover{
  //  // background: -webkit-linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  //  background: linear-gradient(90deg, #30063E 12.38%, #9F0373 100%);
  //  color:#FCFCFC;
  //  border:none;
  //  cursor:pointer;
  //  moz-transition: all .4s ease-in-out;
  //  -o-transition: all .4s ease-in-out;
  //  -webkit-transition: all .4s ease-in-out;
  //  transition: all .4s ease-in-out;
  }
  `;

  return (
    <AdvertismentContainer>
      <BackgroundContainer>
        <TextContainer>
          <HeadingText>Have Projects in mind?</HeadingText>
          <SecondaryText>Let’s Work Together</SecondaryText>
          <p>
            I'm Bishal Hada— a designer who works to push creative boundaries
          </p>
          <ContactMeButton>
            Contact Me
                      </ContactMeButton>
        </TextContainer>
        <AdvertismentImage></AdvertismentImage>
      </BackgroundContainer>
    </AdvertismentContainer>
  );
};
