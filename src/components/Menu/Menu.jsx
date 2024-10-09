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
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {hover ? (
        <>
          <div className="navbar-profile-pic">
            <img src={defaultProfilePic} alt="profile-pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Work Experience
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
              <div className="nav-link">
                <FcBookmark />
                Publications
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
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
