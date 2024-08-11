import React from "react";
import HTMLIcon from "./../Assets/html.webp";
import JS from "./../Assets/javascript.png";
import ReacrJs from "./../Assets/react.svg";
import CSSIcon from "./../Assets/css.svg";
import Py from "./../Assets/python.png";
import "./Styles/icondis.css";
import Image from "next/image";
import mySQL from './../Assets/mysql.svg'
import figma from './../Assets/figma-logo-512.webp'
import django from './../Assets/django.svg'
import frappe from './../Assets/frappe-icon.svg'

export default function IconsDisplay() {
  return (
    <div className="icon-cont">
      <Image className="icon" src={HTMLIcon} alt="HTML"></Image>
      <Image className="icon js" src={JS} alt="JS"></Image>
      <Image className="icon" src={CSSIcon} alt="CSS"></Image>
      <Image className="icon" src={Py} alt="Py"></Image>
      <Image className="icon react" src={ReacrJs} alt="React"></Image>
      <Image className="icon" src={mySQL} alt="mySQL"></Image>
      <Image className="icon" src={figma} alt="figma"></Image>
      <Image className="icon django" src={django} alt="django"></Image>
      <Image className="icon frappe" src={frappe} alt="frappe"></Image>
    </div>
  );
}
