import React from "react";
import "../Education/Education.css";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <div className="row">
          <div className="col-md-6 education-content">
            <h1>Education</h1>
            <p>
              <ul>
                <li>
                  <strong>SSC</strong>:
                  <ul>
                    <li>Completed Secondary School Certificate (SSC)</li>
                    <li>School: [Your SSC School Name]</li>
                    <li>Major: [Your Major/Subjects]</li>
                    <li>Results: [Your Results]</li>
                    <li>
                      <a
                        href="[Link to SSC Certificate]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <strong>HSC</strong>:
                  <ul>
                    <li>Completed Higher Secondary Certificate (HSC)</li>
                    <li>College: [Your HSC College Name]</li>
                    <li>Specialized in: [Your Major/Subjects]</li>
                    <li>Results: [Your Results]</li>
                    <li>
                      <a
                        href="[Link to HSC Certificate]"
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
          <div className="col-md-6 education-content">
            <p>
              <ul>
                <li>
                  <strong>University</strong>:
                  <ul>
                    <li>Pursuing Bachelor of Science in [Your Major]</li>
                    <li>University: [Your University Name]</li>
                    <li>Focus: [Your Key Areas of Study or Projects]</li>
                    <li>
                      <a
                        href="[Link to University Certificate]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <strong>Masters</strong>:
                  <ul>
                    <li>Completed/Enrolled in Masters in [Your Major/Field]</li>
                    <li>Institution: [Your University/Institution Name]</li>
                    <li>
                      Key achievements: [Your Key Accomplishments or Research]
                    </li>
                    <li>
                      <a
                        href="[Link to Masters Certificate]"
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
        </div>
      </div>
    </>
  );
};

export default Education;
