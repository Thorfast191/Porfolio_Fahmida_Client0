import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../Assets/Docs/Resume.txt";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <h1>Hi I am,</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Fahmida Sultana | Chairman, Dramatics Department | Chittagong University.",
                ], // Add more strings as needed
                autoStart: true,
                loop: true,
                deleteSpeed: 50, // Adjust this to control how fast the text deletes
                delay: 100, // Adjust this to control the typing speed
                cursor: "", // Remove the cursor to prevent flashing
                // Using `deleteSpeed` ensures smoother transitions between words
              }}
            />
          </h2>
          <div className="home-buttons">
            <a className="btn btn-cv" href={Resume} download="your_name.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
