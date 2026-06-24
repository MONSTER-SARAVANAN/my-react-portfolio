import React from "react";
import { motion } from "framer-motion";

import resumeFile from "../assets/resume/Resume.pdf";

import "../styles/resume.css";

const ResumeViewer = () => {
  return (
    <div className="resume-wrapper">

      <motion.h1
        className="resume-title"
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        MY RESUME
      </motion.h1>

      <motion.div
        className="resume-card"

        initial={{
          opacity: 0,
          scale: .9,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: .5,
        }}
      >

        <iframe
          className="resume-preview"
          src={resumeFile}
          title="resume-preview"
        />

        <div className="resume-buttons">

          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW
          </a>

          <a
            href={resumeFile}
            download
          >
            DOWNLOAD
          </a>

        </div>

      </motion.div>

    </div>
  );
};

export default ResumeViewer;