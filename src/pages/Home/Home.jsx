import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>Hi! I am,</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Fahmida", "Sultana"], // Add more strings as needed
                autoStart: true,
                loop: true, // Set to true if you want the effect to loop
              }}
            />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
