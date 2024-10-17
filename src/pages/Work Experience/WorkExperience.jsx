import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <>
      <div className="work-experience" id="work-experience">
        <div className="row">
          <div className="col-md-6 work-experience-content">
            <h1>Work Experience</h1>
            <p>
              <ul>
                <li>
                  <strong>Position:</strong> [Your Job Title]
                  <ul>
                    <li>Company: [Company Name]</li>
                    <li>Duration: [Start Date] – [End Date]</li>
                    <li>
                      Key Responsibilities: [Brief description of your role]
                    </li>
                    <li>
                      <a
                        href="[Link to Work Certificate]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>

          {/* Image of the Workplace */}
          <div className="col-md-6 work-experience-content">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dOepZsS5mVzVBtTUdR8Vo4anMptfMp5Ka45apiUyhoD2FpyPGVqPH8vtCUbxnbnuMn0&usqp=CAU"
              alt="Workplace"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
