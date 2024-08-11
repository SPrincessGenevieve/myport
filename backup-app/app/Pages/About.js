"use client"; 

import LineDivide from './../Components/LineDivide'
import EducationDetails from './../Components/EducationDetails'
import Overview from './../Components/Overview'
import './../Styles/About.css'
import hat from "./../Assets/hat.png";
import cert from "./../Assets/cert.svg";
import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const scrollRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    setAnimationPlayed(true);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const hatVariant = {
    offscreen: {
      y: 150,
      rotate: -200,
    },
    onscreen: {
      y: screenWidth > 1000 ? -300 : -60,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const certVariant = {
    offscreen: {
      x: -160,
    },
    onscreen: {
      x: screenWidth > -1200 ? 100 : -1000,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <div className="about-cont edu-cert">
      <div>
        <Overview></Overview>
      </div>
      <div className="about-container upper">
        <motion.div
          variants={hatVariant}
          initial="offscreen"
          whileInView="onscreen"
          animate="offscreen"
          exit="onscreen"
          className="cert-container"
        >
          <Image className="hat" alt="hat" src={hat}></Image>
        </motion.div>

        <div className="education-container">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              bounce: 0.4,
              type: "spring",
              duration: 1,
              delay: 0.7,
            }}
          >
            <LineDivide></LineDivide>
          </motion.div>

          <div className="title-educ">
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
            <EducationDetails
              level={"SECONDARY"}
              year={"2019-2020"}
              course={"Science, Technology, Engineering and Mathematics (STEM)"}
              school={"Fatima College of Camiguin"}
            />
          </div>
        </div>
      </div>

      <div className="about-container lower">
        <motion.div
          variants={certVariant}
          initial="offscreen"
          whileInView="onscreen"
          animate="offscreen"
          exit="onscreen"
          className="cert-container"
        >
          <Image className="cert" alt="cert" src={cert}></Image>
        </motion.div>

        <div className="education-container certificate">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              bounce: 0.4,
              type: "spring",
              duration: 1,
              delay: 0.7,
            }}
          >
            <LineDivide></LineDivide>
          </motion.div>

          <div className="title-educ">
            <motion.h1
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                bounce: 0.4,
                type: "spring",
                duration: 1,
              }}
              className="edu-text cer-text"
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
              course={"ITnnovation Expo 2024 of the Society if Information Technology Enthusiast - USTP CDO"}
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
            
          </div>
        </div>
      </div>
    </div>
  );
}
