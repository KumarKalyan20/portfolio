import React from 'react';
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Kalyan-Cv.pdf";
import Info from "./Info"; 

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        I'm a passionate Full Stack Developer. I've honed my skills in HTML, CSS, JavaScript, Bootstrap, React, RESTful API, Python, Java, Git, and GitHub. Armed with a certificate in Full Stack Development from Nirmaan Organization, I continuously expand my knowledge and tackle new challenges. I'm eager to bring my creativity and technical expertise to impactful web development.
                    </p>

                    <a download href={CV} className="button button--flex">
                        Download CV
                        <i className="uil uil-import"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
