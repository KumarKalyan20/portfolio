import React from "react";
// import "./social.css";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://linkedin.com/" className="home__social-icon" target="_blank">
                  <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/" className="home__social-icon" target="_blank">
                  <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social;