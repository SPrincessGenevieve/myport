import React from "react";
import { motion, Variants } from "framer-motion";
import './Styles/educationDetails.css'

export default function EducationDetails({
  level,
  year,
  course,
  school,
  campus,
  title,
  initial,
  whileInView,
  transition,
}) {
  return (
    <div className="year-cont">
      <h1
      
        className="tertiary"
      >
        {level}
      </h1>
      <div
       
        className="details"
      >
        <p className="details-2">{year}</p>
        <p className="details-2 title">{title}</p>
        <p className="details-2">{course}</p>
        <p className="details-2">{school}</p>
        <p className="details-2">{campus}</p>
      </div>
    </div>
  );
}
