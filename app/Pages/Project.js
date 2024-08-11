import React from "react";
import "./../Styles/Project.css";
import etcmf from "./../Assets/etcmf.PNG";
import mobile from "./../Assets/mob.png";
import portfolio from "./../Assets/port.PNG";
import missArt from "./../Assets/miss.png";
import cdo from "./../Assets/cdo.PNG";
import projects from "./../Assets/JSON/projects_info.json";
import Image from "next/image";
import next from "./../Assets/next.gif";
import { motion } from "framer-motion";
import LineDivide from "../Components/LineDivide";

const imageMapping = {
  "eTCMF - Web": etcmf,
  "eTCMF - Mob": mobile,
  Portfolio: portfolio,
  MissArt: missArt,
  CDORental: cdo,
};

export default function Project() {
  return (
    <div className="project-container">
      <div className="project-l1">
        <h2 className="intro-proj" style={{ color: "#e66464" }}>
          WHAT I HAVE DONE SO FAR
        </h2>
        <h1 className="over">PROJECTS</h1>
      </div>
      <div className="project-items">
        {projects.projects.map((project, index) => (
          <>
            <div className="parent-innter-pro">
              <div className="inner-item-cont">
                <motion.div
                  className="project-cont"
                  initial={{ opacity: 0, translateY: 100 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    bounce: 0.4,
                    type: "spring",
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  key={index}
                >
                  <div className="image-cont">
                    <Image
                      alt=""
                      className="project-img"
                      src={imageMapping[project.title] || abstract}
                    ></Image>
                    <p className="title-project">{project.title}</p>
                    <p className="subtitle-pro">{project.client}</p>
                    <p className="subtitle-pro date">{project.date}</p>
                    <p className="minisub-pro">
                      {project.role || project["mini-title"]}
                    </p>
                    <p className="detail-pro">{project.details}</p>
                    <p className="language">{project.language.join(", ")}</p>
                  </div>
                  <div className="line-cont">
                    <LineDivide></LineDivide>
                  </div>
                </motion.div>
                <div className="date-container">
                  <motion.div
                    className="date-cont"
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{
                      bounce: 0.4,
                      type: "spring",
                      duration: 0.5,
                      delay: 0.2,
                    }}
                  >
                    <p className="date">{project.date}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
