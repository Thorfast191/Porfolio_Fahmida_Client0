import React from "react";
import "./Menu.css";
import {
  FcAbout,
  FcBookmark,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
} from "react-icons/fc";

const defaultProfilePic = require("../../uploads/pro_pic.png");

const Menu = ({ hover, onMouseEnter, onMouseLeave }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {hover ? (
        <>
          <div className="navbar-profile-pic">
            <img src={defaultProfilePic} alt="profile-pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link" onClick={() => scrollToSection("home")}>
                {/* <FcHome /> */}
                <span>Home</span>
              </div>
              <div
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                {/* <FcAbout /> */}
                <span>About</span>
              </div>
              <div
                className="nav-link"
                onClick={() => scrollToSection("work-experience")}
              >
                {/* <FcPortraitMode /> */}
                <span>Work Experience</span>
              </div>
              <div
                className="nav-link"
                onClick={() => scrollToSection("education")}
              >
                {/* <FcReadingEbook /> */}
                <span>Education</span>
              </div>
              <div
                className="nav-link"
                onClick={() => scrollToSection("publications")}
              >
                {/* <FcBookmark /> */}
                <span>Publications</span>
              </div>
              <div
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                {/* <FcBusinessContact /> */}
                <span>Contact</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
              </div>
              <div className="nav-link">
                <FcAbout />
              </div>
              <div className="nav-link">
                <FcPortraitMode />
              </div>
              <div className="nav-link">
                <FcReadingEbook />
              </div>
              <div className="nav-link">
                <FcBookmark />
              </div>
              <div className="nav-link">
                <FcBusinessContact />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
