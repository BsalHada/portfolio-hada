import { styled } from "styled-components";
import React, { Component } from "react";
import { ProjectCard2 } from "./ProjectCard2";
import ImgSrc from "../assets/mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";

const ProjectImage = styled.div`
background-image: url(props.img);
width: 28rem;
height: 14rem;
background-size: cover;
background-repeat: no-repeat;
border-radius: 0.2rem;

&:hover{
transfrom:scale(8);
                  `;
                  

export const ProjectCard = (props) => {
  //how to add key and value in object
  ///-----PC1----
  //<ProjectCard2 projectDetail={props.projectDetail.tag1,}/>
  ///-----PC2----
  //<ProjectCard3 projectDetail={props.projectDetail}/>
  ///-----PC3----
  //<ProjectCard4 projectDetail={props.projectDetail}/>
  ///-----PC4----
  //<ProjectCard5 projectDetail={props.projectDetail}/>


  //<ProjectCard2 projectDetail={props.projectDetail}/>
  //<ProjectCard2 projectDetail={props.projectDetail}/>
  //<ProjectCard2 projectDetail={props.projectDetail}/>
  //body, title,tag,image
  //
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

  const FieldContainer = styled.div({
    margin: "0rem",
    padding: "0rem",
    display: "flex",
    justifyContent: "flexStart",
    alignItems: "center",
    gap: "1rem",
  });

  const FieldTag = styled.div({
    padding: "0",
    marginTop: "0.6rem",
    width: "10rem",
    height: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
    background: "#DEF4FF",
    // color: "#3187B8",
    color:'#1f1f1f',
    borderRadius: "3rem",
  });

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

  const HeadingText = styled.div`
    padding: 0;
    marginbottom: 0rem;
    font-size: 1.8rem;
    color: #1f1f1f;
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
  // console.log('prope',props)
  // console.log('prope',props.projectDetail.title)

  // console.log('prope','id',props.info.id)
  // console.log('prope','name',props.info.name)
  // console.log('tag',props.data.body)

  // return(null)

  // console.log("tag3", props);
  console.log('tag',props);

  return (
  <CardContainer>
           <ProjectImage ></ProjectImage>
           <FieldContainer>
           <FieldTag>{props.tag1}</FieldTag>
           <FieldTag>{props.tag2}</FieldTag>
           </FieldContainer>   
            <TextContainer>
                    <HeadingText>   
                      {props.body}
                      </HeadingText>
                      <p>{props.body}</p>
                </TextContainer>

       </CardContainer>

  
  );
};
