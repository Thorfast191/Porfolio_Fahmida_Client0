import React, { useState } from "react";
import Home from "../../pages/Home/Home.js";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menu from "../Menu/Menu.jsx";

const Layout = () => {
  const [hover, setHover] = useState(false);

  // Handle mouse enter (hover) and mouse leave
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div className="sidebar-section">
        <div
          className={hover ? "sidebar-hover sidebar" : "sidebar"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hover ? (
            <div className="sidebar-toggle-icons">
              <Menu
                hover={hover}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              {/* <p>
                <AiOutlineDoubleLeft size={30} />
              </p> */}
            </div>
          ) : (
            <div style={{ width: "90px", alignItems: "center" }}>
              <AiOutlineDoubleRight size={30} />
              <Menu hover={hover} isCollapsed />
            </div>
          )}
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
