import { styled } from "styled-components";
import React, { Component } from "react";
import ImgSrc from "../assets/bishalHadaPic.jpg";

export const HeroSection = () => {
  //Parent Div Container of Nav
  const HeroContainer = styled.div({
    background: "#010B1A",
    height: "100vh",
    // width:'100%',
    display: "flex",
    // position:'fixed',
    margin: "0rem",
    paddingLeft: "10rem",
    // paddingRight:'20rem',

    // paddingTop:'10rem',

    justifyContent: "flexStart",
    flexDirection: "row",
    alignItems: "center",
    gap: "24rem",
  });

  //    const HeroImageBackground = styled.div`

  //    width: 24rem;
  //    height: 3ss0rem;
  //    border:1px solid red;
  //    padding:0rem;
  //    margin:0rem;
  //    display:flex;
  //    justify-content:flex-start;

  //     z-index: -8;
  //     // display:flex;
  //     // justify-contain:flex-start;
  //     // align-items:center;

  //     boxShadow: 1px 0px 10px 0.5px linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  //     background: linear-gradient(rgb(0, 255, 81), rgb(255, 213, 0));
  //     filter: blur(2.5em);
  //     animation: shadow-rotate 1.5s linear infinite;
  //   transform-origin: center;
  //   @keyframes shadow-rotate {
  //     from {
  //         transform: translate(-50%, -50%) rotate(0deg);
  //     }
  //     to {
  //         transform: translate(-50%, -50%) rotate(360deg);
  //     }
  // }

  //  `;

  const HeroImage = styled.div`
    background-image: url(${ImgSrc});
    width: 24rem;
    height: 30rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 2% 1%;
    border-radius: 0.2rem;
    padding: 0rem;
    margin: 0rem;
    box-shadow: 1px 0px 10px 15px #810ca8;
    z-index:1;
    
    &:hover{
      animation: shadow-rotate 1.5s linear infinite;
        transform-origin: center;
        @keyframes shadow-rotate {
          from {
              transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
              transform: translate(-50%, -50%) rotate(360deg);
          }
      }

    }
  //   animation: shadow-rotate 1.5s linear infinite;
  //   transform-origin: center;
  //   @keyframes shadow-rotate {
  //     from {
  //         transform: translate(-50%, -50%) rotate(0deg);
  //     }
  //     to {
  //         transform: translate(-50%, -50%) rotate(360deg);
  //     }
  // }
  `;
 
  const TextContainer = styled.div({
    padding: "0",
    margin: "0",
    display: "flex",
    width: "24rem",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "flexStart",
    textAlign: "justify",
    lineHeight: "2rem",
    color: "#bcbcbc",
    gap: "2rem",
  });

  const ContactMeButton = styled.div`
    width: 8rem;
    height: 2.5rem;
    //   background-color:#ffffff;
    background: linear-gradient(90deg, #30063e 12.38%, #9f0373 100%);

    //   background: -webkit-linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: -webkit-linear-gradient(
        0deg,
        rgba(34, 193, 195, 1) 0%,
        rgba(253, 187, 45, 1) 100%
      );
      color: #fff9f9;
      cursor: pointer;
    }
  `;

  const HeroHeadingText = styled.div({
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "flexStart",
    textAlign: "justify",
    lineHeight: "2rem",
    gap: "1rem",
  });
  const HeroTextGradient = styled.div`
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
  const HeroText = styled.div`
    font-size: 3rem;
    color: #fcfcfc;
    line-height: 4rem;
  `;

  return (
    <HeroContainer>
      <TextContainer>
        <HeroHeadingText>
          <HeroTextGradient>
            Digital Designer
            <br />
          </HeroTextGradient>
          <HeroText>
            Crafting Products
            <br />
            That People Love
            <br />
          </HeroText>
        </HeroHeadingText>
        I'm Bishal Hada— a designer who works with
        <br />
        startups looking to push creative boundaries <br />
        and create unique user experiences.
        <ContactMeButton>Contact Me</ContactMeButton>
      </TextContainer>

<HeroImage/>



      
    </HeroContainer>
  );
};
