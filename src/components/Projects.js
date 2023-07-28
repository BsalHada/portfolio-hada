import { styled } from "styled-components";
import React, { Component } from "react";
import ImgSrc from "../assets/bishalHadaPic.png";
import { ServiceCard } from "./ServiceCard";
import { ProjectCard } from "./ProjectCard";
import {project, projectArray} from '../array/projectArray';

export const Projects = () => {
  

 
  //Parent Div Container

  const ProjectsContainer = styled.div({
    background: "#F7F7F9",
    display: "flex",
    margin: "0rem",
    paddingTop: "8rem",
    paddingLeft: "10rem",
    height: "170vh",
    justifyContent: "flexStart",
    flexDirection: "column",
    alignItems: "flexStart",
    gap: "2rem",
  });
  const ParentCardContainer = styled.div({
    margin: "0rem",
    padding: "0rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceAround",
    alignItems: "center",
    gap: "6rem",
  });
  const CardContainer = styled.div({
    margin: "0rem",
    padding: "0rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "flexStart",
    gap: "6rem",
  });

  const TextContainer = styled.div({
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "flexStart",
    textAlign: "justify",
    color: "#393E46",
    width: "30rem",
  });

  const HeadingText = styled.div`
    padding: 0;
    marginbottom: 0rem;
    font-size: 2rem;
    color: #1f1f1f;
    line-height: 2rem;
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
    <ProjectsContainer>
      <TextContainer>
        <HeadingText>Selected Projects </HeadingText>
        <p>
          Over the years, I've partnered with startups of all sizes and various
          stages to create some truly unique products. Here are a few that I
          feel were the most challenging yet rewarding.
        </p>
      </TextContainer>
      <ParentCardContainer>
        <CardContainer>
        {/* {
          projectArray.map((projectDetail)=>{
            return <ProjectCard title={projectDetail.title} body={projectDetail.body} image={projectDetail.image} tag1={projectDetail.tag1} tag2={projectDetail.tag2}/>
          }) //(info) prop which contains obj of name and id 
        } */}

       
        {
          projectArray.map((projectDetail)=>{
            return <ProjectCard projectDetail={projectDetail} info={{name:'ananda',id:'001'}}/>
          })
        }
        {/* {
          projectArray.map((data)=>{
            return <ProjectCard projectDetail={data}/>
          })
        } */}
          <ProjectCard />
          <ProjectCard />
        </CardContainer>
        <CardContainer>
          <ProjectCard />
          <ProjectCard />
        </CardContainer>
      </ParentCardContainer>
    </ProjectsContainer>
  );
};
