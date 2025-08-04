import React, { Component } from "react";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/skillsMenu.css";
import skills from "./skillsData";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({ activeMenuItem: menuItem });
  };

  renderContent = (skills) => {
    return (
      <AnimatePresence mode="wait">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`skill-sub-container-${this.state.activeMenuItem}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.h3
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {skill.title}
            </motion.h3>
            <div className="level-container">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`level-point ${
                    i < skill.level ? "filled" : "unfilled"
                  }`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    );
  };

  render() {
    const { activeMenuItem } = this.state;
    const menuItems = ["FRONT-END", "BACK-END"];
    const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;

    return (
      <motion.div
        className="skill-menu"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={classNames("skill-item", {
              activeSkill: activeMenuItem === index + 1,
            })}
            onClick={() => this.handleMenuItemClick(index + 1)}
          >
            <h2 className="skill-title">{item}</h2>
          </motion.div>
        ))}

        <motion.img
          key={currentIcon}
          className="skill-icon"
          src={currentIcon}
          alt="current skill"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="skill-sub-container">
          {this.renderContent(skills[activeMenuItem])}
        </div>
      </motion.div>
    );
  }
}
