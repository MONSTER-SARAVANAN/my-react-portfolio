import React, { Component } from "react";
import { motion } from "framer-motion";

import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubHeading";
import SubheadingsData from "./subheadingsData";

import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";

import "../styles/aboutMenu.css";

export default class AboutMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    });
  };

  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading,
    });
  };

  render() {
    const { activeMenuItem, activeSubheading } = this.state;

    const menuItems = ["PERSONAL", "EDUCATION"];

    const activeTitle =
      activeMenuItem === 1
        ? "Crafting Digital Experiences"
        : "Building Through Learning";

    const activeDesc =
      activeMenuItem === 1
        ? "Arise — Full Stack Developer"
        : "Continuous Growth • Modern Engineering";

    const activeIcon =
      activeMenuItem === 1
        ? personalIcon
        : educationIcon;

    const subheadings =
      SubheadingsData[activeMenuItem];

    return (
      <div className="about-wrapper">

        {/* LEFT MENU */}

        <motion.div
          className="menu"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() =>
                this.handleMenuItemClick(index + 1)
              }
            />
          ))}
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="sub-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <div className="hero-top">

            <motion.div
              className="profile-shell"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <img
                src={activeIcon}
                className="icon"
                alt=""
              />

              <div className="ring" />
              <div className="ring2" />
            </motion.div>

            <div className="hero-text">

              <span>
                ⚡ ABOUT ME
              </span>

              <h1>
                {activeTitle}
              </h1>

              <h2>
                {activeDesc}
              </h2>

              <p>
                Building immersive,
                scalable and futuristic
                experiences using MERN,
                animations and modern UI.
              </p>

            </div>

          </div>

          <div className="content-area">

            {subheadings.map(
              (subheading, index) => (
                <AboutSubheading
                  key={index}
                  title={subheading.title}
                  content={subheading.content}
                  active={
                    activeSubheading ===
                    index + 1
                  }
                  menuItem={
                    activeMenuItem
                  }
                  onClick={() =>
                    this.handleSubheadingClick(
                      index + 1
                    )
                  }
                />
              )
            )}

          </div>

        </motion.div>

      </div>
    );
  }
}