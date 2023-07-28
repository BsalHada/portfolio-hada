import { styled } from "styled-components";
import React,{Component} from 'react';
// import LogoSrc from '../../assets/logo.png';

export const Navbar = ()=>{

    
       //Parent Div Container of Nav 
       const NavContainer=styled.div({
        background: '#010B1A',
        width:'100%',
        height: '85px',
        display: 'flex',
        gap:'0rem',
        position:'fixed',
        margin:'0rem',
        padding:'0rem',
        // border:'1px solid #fefefe',
        zIndex: '12',
        justifyContent:'flexStart',
        alignItems:'center',
        boxShadow: '1px 0px 10px 0.5px #9DB2BF'
       })
       
       //div for nav menu
       const NavItems =styled.div({
        display:'flex',
        justifyContent:'flexStart',
        alignItems:'center',
        listStyleType:'none',
        paddingLeft:'10rem',
        flexWrap:'wrap',
        gap:'4rem',
        color:'#FCFBFB',
        width:'70%',
        fontSize:'1.1rem'
       })

       const ContactMeButton=styled.div`
       width:8rem;
       height:2.5rem;
       background-color:none;
       border:0.4px solid purple ;
       color:#f1f1f1;
       display:flex;
       justify-content:center;
       align-items:center;
       border-radius:0.2rem;
       font-size:1.1rem;
       
       &:hover{
        // background: -webkit-linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
        background: linear-gradient(90deg, #30063E 12.38%, #9F0373 100%);
        color:#FCFCFC;
        border:none;
        cursor:pointer;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
       }
       `

       const List=styled.div`
       color: #f1f1f1;
       
       &:hover{
        background: -webkit-linear-gradient(0deg, rgba(4,193,195,1) 0%, rgba(253,187,45,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor:pointer;
       }
       `
       
     
        return(
       <NavContainer>
            <NavItems>
                <List>Home</List>
                <List>About Me</List>
                <List>Services</List>
                <List>Projects</List>
                <List>Download CV</List>
             </NavItems>
                <ContactMeButton>Contact Me</ContactMeButton>
       </NavContainer>

        )
    

    }


