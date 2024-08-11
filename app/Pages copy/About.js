"use client"; 

import LineDivide from './../Components/LineDivide'
import EducationDetails from './../Components/EducationDetails'
import Overview from '../Pages/Overview'
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
      
    </div>
  );
}
