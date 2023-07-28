import { styled } from "styled-components";
import React, { Component } from "react";
import ImgSrc from "../assets/mobile.png";


export const ProjectCard5 = (props) => {

// props.projectDetail.tag5 = "value5";

console.log('prope5',props.projectDetail)

  //Parent Div Container
  const CardContainer = styled.div({
    background: "#010B1A",
    display: "flex",
    margin: "0rem",
    padding: "1.88rem",
    width: "28rem",
    justifyContent: "flexStart",
    flexDirection: "column",
    alignItems: "flexStart",
    gap: "1rem",
    background: "#ffffff",
    // boxShadow: '1px -2px 6px 0.2px #bcbcbc',
    borderRadius: "0.4rem",
  });

  // console.log('prope',props)
  // console.log('prope',props.projectDetail.title)

  // console.log('prope','id',props.info.id)
  // console.log('prope','name',props.info.name)
  // console.log('tag',props.data.body)

  const TextContainer = styled.div({
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "flexStart",
    textAlign: "justify",
    color: "#7F8487",
  });

  return(
<CardContainer/>
  )


}

