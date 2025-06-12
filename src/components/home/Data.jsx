import React from 'react';
// import './data.css';


const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
         Kumar Kalyan
   <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="38" 
    height="38" 
    viewBox="0 0 48 48" 
    fill="none" 
  
   >
    <path d="M18 9.5V5a2 2 0 1 0-4 0v7M14 4L14 3a2 2 0 0 0-4 0v7M10 5v-.5a2 2 0 1 0-4 0V13" />
     <path d="M5 13.5V14a7 7 0 0 0 14 0v-5" />
   </svg>

       </h1>

      <h3 className="home__subtitle">Web Developer</h3>

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
