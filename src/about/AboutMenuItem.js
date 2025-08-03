import React, { Component } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import "../styles/aboutMenu.css";

class AboutMenuItem extends Component {
  render() {
    const { title, active, onClick } = this.props;
    return (
      <motion.div
      onClick={onClick}
      className={classNames("item", { active })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="title">{title}</h2>
    </motion.div>
    );
  }
}

export default AboutMenuItem;
