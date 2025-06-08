import React from 'react';

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    class="button__icon"
    fill="var(--container-color)"
  >
    <path d="M2 22l22-10L2 2l4 7 16 3-16 3 4 7z" fill="var(--container-color)"/>
    <path d="M2 22l22-10L2 2l4 7 16 3-16 3 4 7z" fill="var(--container-color)"/>
   
  </svg>
);

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        John Smith
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="home__icon"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
      </h1>

      <h3 className="home__subtitle">Web Developer</h3>

      <p className="home__description">
        I'm a Full Stack Developer based in India, and I'm very passionate and dedicated to my work.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <SendIcon />
      </a>
    </div>
  );
};

export default Data;
