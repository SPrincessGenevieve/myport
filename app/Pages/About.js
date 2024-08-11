"use client";

import LineDivide from "./../Components/LineDivide";
import EducationDetails from "./../Components/EducationDetails";
import Overview from "./Overview";
import { useInView } from "react-intersection-observer";
import "./../Styles/About.css";
import hat from "./../Assets/hat.png";
import cert from "./../Assets/cert-svg.png";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Project from "./Project";

export default function About() {
  const [refHat, inViewHat] = useInView({ triggerOnce: true });
  const [refCert, inViewCert] = useInView({ triggerOnce: true });

  const controlsHat = useAnimation();
  const controlsCert = useAnimation();

  useEffect(() => {
    if (inViewHat) {
      controlsHat.start({
        y: 0,
        rotate: 360,
        transition: {
          type: "spring",
          bounce: 0.4,
          stiffness: 100,
          damping: 14,
          delay: 0.2,
        },
      });
    }
  }, [inViewHat, controlsHat]);

  useEffect(() => {
    if (inViewCert) {
      controlsCert.start({
        x: 0,
        rotate: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          stiffness: 100,
          damping: 14,
          delay: 0.2,
        },
      });
    }
  }, [inViewCert, controlsCert]);

  return (
    <div className="about-parent">
      <div>
        <Overview></Overview>
      </div>

      <div className="education-container" ref={refHat}>
        <motion.div
          className="hat-container"
          initial={{ y: 600, rotate: 0 }} // Start from below the container
          animate={controlsHat}
        >
          <Image className="hat" alt="hat" src={hat} />
        </motion.div>
        <motion.div className="education-details">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              bounce: 0.4,
              type: "spring",
              duration: 1,
              delay: 0.2,
            }}
          >
            <LineDivide></LineDivide>
          </motion.div>

          <motion.div className="education-text">
            <motion.h1
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                bounce: 0.4,
                type: "spring",
                duration: 1,
              }}
              className="edu-text"
            >
              EDUCATION
            </motion.h1>
            <EducationDetails
              level={"TERTIARY"}
              year={"2023-2024"}
              course={"Bachelor of Science in Information Technology"}
              school={
                "University of Science and Technology of Southern Philippines"
              }
              campus={"CDO Campus (USTP CDO)"}
            />
            <br></br>
            <br></br>
            <EducationDetails
              level={"SECONDARY"}
              year={"2019-2020"}
              course={"Science, Technology, Engineering and Mathematics (STEM)"}
              school={"Fatima College of Camiguin"}
            />
          </motion.div>
        </motion.div>
      </div>

      
      <div className="certificate-container" ref={refCert}>
        <motion.div
          className="cert-container"
          initial={{ x: -600 }} // Start from below the container
          animate={controlsCert}
        >
          <Image className="hat" alt="cert" src={cert} />
        </motion.div>
        <motion.div className="certificate-details">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              bounce: 0.4,
              type: "spring",
              duration: 1,
              delay: 0.2,
            }}
          >
            <LineDivide></LineDivide>
          </motion.div>

          <motion.div className="certificate-text">
            <motion.h1
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                bounce: 0.4,
                type: "spring",
                duration: 1,
              }}
              className="edu-text"
            >
              CERTIFICATES
            </motion.h1>
            <EducationDetails
              level={"BEST IN CAPSTONE AND RESEARCH PROJECT"}
              title={"WEB AND MOBILE APPLICATION FOR E-TICKETING CITATION"}
              year={"2023-2024"}
              course={"Gabi ng Parangal (Awards Night)"}
              school={
                "University of Science and Technology of Southern Philippines"
              }
              campus={"CDO Campus (USTP CDO)"}
            />
            <EducationDetails
              level={"2ND RUNNER UP for BEST CAPSTONE POSTER"}
              title={"WEB AND MOBILE APPLICATION FOR E-TICKETING CITATION"}
              year={"2023-2024"}
              course={
                "ITnnovation Expo 2024 of the Society if Information Technology Enthusiast - USTP CDO"
              }
              school={
                "University of Science and Technology of Southern Philippines"
              }
              campus={"CDO Campus (USTP CDO)"}
            />
            <EducationDetails
              level={"CCNAv7: Switching, Routing, and Wireless Essentials"}
              year={"2022-2023"}
              course={"Bachelor of Science in Information Technology"}
              school={
                "University of Science and Technology of Southern Philippines"
              }
              campus={"CDO Campus (USTP CDO)"}
            />
            <EducationDetails
              level={"SINATECH Workshop Certificate"}
              year={"2020-2021"}
              course={"Bachelor of Science in Information Technology"}
              school={
                "University of Science and Technology of Southern Philippines"
              }
              campus={"CDO Campus (USTP CDO)"}
            />
          </motion.div>
        </motion.div>
      </div>
      <div>
        <Project></Project>
     </div>
    </div>
  );
}
