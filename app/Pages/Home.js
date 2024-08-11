import React from "react";
import "./../Styles/Home.css";
import avatar from "./../Assets/avatar.svg";
import bg from "./../Assets/abstract.png";
import { Email } from "@mui/icons-material";
import IconsDisplay from "./../Components/IconsDisplay";
import LineDivide from "./../Components/LineDivide";
import Image from "next/image";

export default function Home({ onClick }) {
  return (
    <div className="main-home">
      <Image className="bg" src={bg} alt="bg"></Image>
      <div className="home-cont">
        <div className="avatar-container">
          <Image src={avatar} className="avatar" alt="avatar"></Image>
        </div>

        <div className="right-container">
          <div className="line-home">
            <LineDivide></LineDivide>
          </div>

          <div className="opening">
            <h1 className="top-text">Hi! I am Princess</h1>
            <p className="bottom-text">
              I am a recent BSIT graduate with a strong foundation in software
              development and web technologies. I'm eager to apply my skills to
              real-world projects and grow in the tech industry. Let&apos;s
              Connect!
            </p>
            <p className="bottom-text-2"></p>
            <div className="contact-btn">
              <button className="contact-me-btn" onClick={onClick}>
                <p className="contact-me-text">CONTACT ME</p>{" "}
                <Email style={{ marginLeft: 20, fontSize: "2.5vh" }}></Email>
              </button>
            </div>
            <div className="icon-cont-home">
              <IconsDisplay></IconsDisplay>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
