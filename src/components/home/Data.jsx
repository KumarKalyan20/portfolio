import React from 'react';
// import './data.css';


const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
         Kumar Kalyan
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          className="home__icon"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
          fill="FFDD67" />
        </svg> 
       </h1>

      <h2 className="home__subtitle">Web Developer</h2>

      <p className="home__description">
        I'm a Full Stack Developer based in India, and I'm very passionate and dedicated to my work.
      </p>

      <a href="#contact" className="button button--flex ">
        Say Hello 
         <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             class="button__icon"
             fill="none"
         
          >
        <path d="M2 22l22-10L2 2l4 7 16 3-16 3 4 7z" fill="var(--container-color)"/>
          <path d="M2 22l22-10L2 2l4 7 16 3-16 3 4 7z" fill="var(--container-color)"/>
        
      </svg>      
      </a>
    </div>
  );
};

export default Data;
