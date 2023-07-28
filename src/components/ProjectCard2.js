import { styled } from "styled-components";
import React, { Component } from "react";
import { ProjectCard3 } from "./ProjectCard3";
import ImgSrc from "../assets/mobile.png";

export const ProjectCard2 = (props) => {

    
  //how to add key and value in object
  ///-----PC1----
  //<ProjectCard2 projectDetail={props.projectDetail.tag1,}/>
  ///-----PC2----
  //<ProjectCard3 projectDetail={props.projectDetail}/>
  ///-----PC3----
  //<ProjectCard4 projectDetail={props.projectDetail}/>
  ///-----PC4----
  //<ProjectCard5 projectDetail={props.projectDetail}/>
//   Console.log('porpe',props.projectDetail.tag1)
// console.log('prope3',props.projectDetail.title)

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
//   props.tag3='trail'
 
 
// props.projectDetail.tag4 = {...'value4'};
// props.projectDetail.tag4 = "value4";

console.log('tag4',props.projectDetail)
  return(

    <ProjectCard3 projectDetail={props.projectDetail} />
  )


}

