"use client";
import About from "./Pages/About";
import { useRef } from "react";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Image from "next/image";
import Project from "./Pages/Project";
import Navbar from "./Components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './Styles/Bottom.css'

import next from './Assets/next.gif';
import L1 from "./Assets/Layers/L1.png";
import L2 from "./Assets/Layers/L2.png";
import L3 from "./Assets/Layers/L3.png";
import L4 from "./Assets/Layers/L4.png";
import L5 from "./Assets/Layers/L5.png";
import tree2 from "./Assets/Layers/tree2.png";
import ContactMe from "./Components/ContactMe";
import './globals.css'


export default function Page() {
  const offset = 10;

  // Create a ref for the ContactMe component
  const contactMeRef = useRef(null);

  const scrollToContactMe = () => {
    if (contactMeRef.current) {
      contactMeRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      setTimeout(() => {
        window.scrollBy(0, 10); // Adjust 10 to the desired gap
      }, 700); // Adjust 500 to the time it takes for the smooth scroll to complete
    }
  };
  return (
    <main className="App">
      <div>
        <Parallax pages={11}>
          <ParallaxLayer offset={0}>
            <Home onClick={scrollToContactMe}></Home>
          </ParallaxLayer>

          <ParallaxLayer offset={1} factor={10}>
            <About></About>
          </ParallaxLayer>
{/* 
          <ParallaxLayer style={{ marginTop: "30%" }} offset={3}>
            <Project></Project>
            <div className="next-cont">
              <button className="next-btn" onClick={scrollToContactMe}>
                <Image className="next" src={next} alt="next" />
              </button>
            </div>
          </ParallaxLayer> */}
          <ParallaxLayer
            offset={offset}
            speed={0.5}
            className="later1"
            style={{
              backgroundImage: `url(${L1.src})`,
              backgroundSize: "cover",
              backgroundColor: "blue"

            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={offset}
            className="later2"
            speed={0.7}
            style={{
              backgroundImage: `url(${L2.src})`,
              backgroundSize: "cover",

            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={offset}
            className="later3"
            speed={1}
            style={{
              backgroundImage: `url(${L3.src})`,
              backgroundSize: "cover",

            }}
          ></ParallaxLayer>

          <ParallaxLayer
            className="later4"
            offset={offset}
            speed={1}
            style={{
              backgroundImage: `url(${L4.src})`,
              backgroundSize: "cover",

            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={offset}
            speed={1}
            className="later5"
            style={{
              backgroundImage: `url(${L5.src})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>
         
          <ParallaxLayer offset={offset}
            speed={1}
            style={{ marginTop: "-50%" }}
            >
            <div className="contacts" ref={contactMeRef}>
              <ContactMe />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}
