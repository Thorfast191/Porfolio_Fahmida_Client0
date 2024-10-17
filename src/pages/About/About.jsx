import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6  about-img">
            <img
              src="https://media.istockphoto.com/id/1304289911/photo/my-vision-of-female-face.jpg?s=612x612&w=0&k=20&c=PqJ9iL628RILnaVYcCWSFqLj4IxVR7826Lt9t8FknOo="
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 about-content">
            <h1>About</h1>
            <p>
              🎭 As the Chairman of Dramatics at Chittagong University’s Arts &
              Humanities Faculty, I’m passionate about the transformative power
              of theater. From directing performances to guiding research, I’ve
              spent my career inspiring young talent to embrace the magic of the
              stage. 🌟 Through my work, I aim to shape the future of drama in
              Bangladesh, blending creativity with tradition. 🎨✨.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
