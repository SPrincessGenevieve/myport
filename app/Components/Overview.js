import React from "react";
import "./Styles/overview.css";
import WebDev from "./../Assets/web-devloper.jpg";
import ReactDev from "./../Assets/react-js-developer.png";
import GraphicDev from "./../Assets/graphic-designer.webp";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {fadeIn, textVariant} from './utils/motion'

export default function Overview() {
  return (
    <div className="overview-cont">
      <div className="overview-l1">
        <h2 className="intro-over" style={{color:"#e66464"}}>INTRODUCTION</h2>
        <h1 className="over">OVERVIEW</h1>
      </div>
      <div className="overview-l2">
        <p className="about-me">
          Hello! I am a recent graduate with a Bachelor&apos;s degree in Information Technology, passionate about crafting engaging and dynamic user interfaces. As a front-end web developer, I specialize in creating seamless and responsive web applications using React JS and React Native. My toolkit includes Next JS for server-side rendering and MUI Component Libraries for building visually appealing UI components. I also design my own websites using Figma, ensuring a cohesive and user-friendly experience from concept to implementation.
          <br></br>
          <br></br>
          <br></br>
          While my primary focus is on front-end development, I have a foundational understanding of back-end technologies like MySQL and Django. This knowledge helps me work effectively within full-stack environments. I&apos;m eager to apply my skills and grow within a dynamic team. If you&apos;re looking for a dedicated and enthusiastic developer to bring your projects to life, let&apos;s connect!
        </p>
      </div>
      <div className="over-box">
        <Tilt>
          <div
            className="box 1">
            <Image className="dev css" src={WebDev} alt=""></Image>
            <h2 className="over-title">WEB DEVELOPER</h2>
          </div>
        </Tilt>
        
        <Tilt>
          <div className="box 2">
            <Image className="dev react" src={ReactDev} alt=""></Image>
            <h2 className="over-title">REACT DEVELOPER</h2>
          </div>
        </Tilt>
        
        <Tilt>
          <div className="box 3">
            <Image className="dev graph" src={GraphicDev} alt=""></Image>
            <h2 className="over-title">GRAPHIC DESIGNER</h2>
          </div>
        </Tilt>
        
      </div>
    </div>
  );
}
