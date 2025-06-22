import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">

        {/* Frontend */}
        <div className="skills__content">
          <h3 className="skills__title">Frontend developer</h3>
          <div className="skills__box">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Backend */}

        
        <div className="skills__content">
          <h3 className="skills__title">Backend Developer</h3>
          <div className="skills__box">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Node JS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Firebase</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">SQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
