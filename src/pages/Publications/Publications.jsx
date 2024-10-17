import React from "react";
import "./Publications.css";

const WorkExperience = () => {
  return (
    <>
      <div className="publications" id="publications">
        <div className="row">
          <div className="col-md-6 publications-content">
            <h1>Publications</h1>
            <p>
              <ul>
                {/* Publication 1 */}
                <li>
                  <strong>Title:</strong> [Title of the Publication]
                  <br />
                  <strong>Category:</strong> [Category of the Publication]
                  <br />
                  <strong>Description:</strong> [Brief description of your
                  publication]
                  <br />
                  <a
                    href="[Link to Publication]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Publication
                  </a>
                </li>

                <br />

                {/* Publication 2 */}
                <li>
                  <strong>Title:</strong> [Title of the Second Publication]
                  <br />
                  <strong>Category:</strong> [Category of the Second
                  Publication]
                  <br />
                  <strong>Description:</strong> [Brief description of your
                  second publication]
                  <br />
                  <a
                    href="[Link to Second Publication]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Publication
                  </a>
                </li>

                <br />

                {/* Add more publications as needed */}
              </ul>
            </p>
          </div>

          {/* Image of the Workplace */}
          <div className="col-md-6 publications-content">
            <ul>
              {/* Publication 1 */}
              <li>
                <strong>Title:</strong> [Title of the Publication]
                <br />
                <strong>Category:</strong> [Category of the Publication]
                <br />
                <strong>Description:</strong> [Brief description of your
                publication]
                <br />
                <a
                  href="[Link to Publication]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication
                </a>
              </li>

              <br />

              {/* Publication 2 */}
              <li>
                <strong>Title:</strong> [Title of the Second Publication]
                <br />
                <strong>Category:</strong> [Category of the Second Publication]
                <br />
                <strong>Description:</strong> [Brief description of your second
                publication]
                <br />
                <a
                  href="[Link to Second Publication]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication
                </a>
              </li>

              <br />

              {/* Add more publications as needed */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
