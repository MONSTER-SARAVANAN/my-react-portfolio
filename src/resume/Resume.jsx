import React from "react";
import Avatar from "../avatar/Avatar";
import ResumeViewer from "./ResumeViewer";

const Resume = () => {
  return (
    <>
      <Avatar page="resume" />
      <ResumeViewer />
    </>
  );
};

export default Resume;