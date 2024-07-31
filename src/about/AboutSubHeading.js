import React, { Component } from 'react';
import classNames from "classnames";
import "../styles/aboutMenu.css";

const AboutSubHeading = ({ title, content, active, onClick, 
  menuItem }) => {
  const subContainerClass = `sub-container-${menuItem}`

    return (
      <div className={classNames(subContainerClass, { 
        "active-subheading": active })}
        >
        <h3 onClick={"p-container"}>{title}</h3>
      </div>
    );
  };

export default AboutSubHeading;
