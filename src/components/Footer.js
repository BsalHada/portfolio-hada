import { styled } from "styled-components";
import React, { Component } from "react";
import ImgSrc from "../assets/footerBackground.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  //Parent Div Container
  const FooterContainer = styled.div`

    background-image: url(${ImgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    padding:0rem;
    width: 100vw;
    height: 20rem;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    
  `

  const TextContainer = styled.div({
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
 
    textAlign: "justify",
    color: "#bcbcbc",
    gap: "10rem",
  });
  const ListContainer = styled.div({
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "flexStart",
    textAlign: "justify",
    color: "#bcbcbc",
    gap: "1rem",
  });


  const List = styled.div`
    padding: 0;
    margin: 0rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: justify;
    line-height: 2rem;
    color: #f5f5f5;

    &:hover {
      color: #ffc26f;
      cursor: pointer;
    }
  `;
  const HeadingText = styled.div`
    padding: 0;
    marginbottom: 0rem;
    font-size: 1rem;
    color: #ffd400;
    line-height: 1rem;
    font-weight:700;
  `;

  return (
    <FooterContainer>
      <TextContainer>
          
        <ListContainer>
        <HeadingText>
            Quick Links</HeadingText>{" "}
        <List>
          {" "}
          <a>Home</a>{" "}
        </List>
        <List>
          {" "}
          <a>About Us</a>{" "}
        </List>
        <List>
          {" "}
          <a>Gallery</a>{" "}
        </List>
        <List>
          {" "}
          <a>Contact Us</a>{" "}
        </List>

        </ListContainer>
        <ListContainer>
        <HeadingText>
            Quick Links</HeadingText>{" "}
        <List>
          {" "}
          <a>Home</a>{" "}
        </List>
        <List>
          {" "}
          <a>About Me</a>{" "}
        </List>
        <List>
          {" "}
          <a>Projects</a>{" "}
        </List>
        <List>
          {" "}
          <a>Download CV</a>{" "}
        </List>

        </ListContainer>
        
      </TextContainer>
      
    </FooterContainer>
  );
};
