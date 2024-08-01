import React, { Component } from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";

class AboutMenuItem extends Component {
  render() {
    const { title, active, onClick } = this.props;
    return (
      <div className={classNames("item", { active })} onClick={onClick}>
        <h2 className="title">{title}</h2>
      </div>
    );
  }
}

export default AboutMenuItem;