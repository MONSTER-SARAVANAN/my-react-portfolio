import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import projects from "./projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 0,
    };
  }

  handleProjectClick = (index) => {
    this.setState({ activeProject: index });
  };

  renderContent = (project) => {
    return (
      <motion.div
        key={project.id}
        className="project-sub-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.p>{project.description}</motion.p>
        <motion.div
          className="link-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            LINK
          </a>
        </motion.div>
      </motion.div>
    );
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = [
      "PROJECT ONE", "PROJECT TWO", "PROJECT THREE",
      "PROJECT FOUR", "PROJECT FIVE", "PROJECT SIX"
    ];

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item, index) => (
            <motion.div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index,
              })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => this.handleProjectClick(index)}
            >
              <motion.h2 className="title">{item}</motion.h2>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {this.renderContent(projects[activeProject])}
        </AnimatePresence>
      </div>
    );
  }
}
