import React from 'react';

const ScrollDown = () => {
  return (
    <div className="home_scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <svg
          width="32px"
          height="32px"
          class="home__scroll-mouse"
          viewBox="0 0 247 390" 
          version="1.1"
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          
          <path
            class="wheel"
            d="M123.359,10
              C181.924,10,232.717,60.794,232.717,123.359
              C232.717,185.924,181.924,236.717,123.359,236.717
              C64.794,236.717,14,185.924,14,123.359
              C14,60.794,64.794,10,123.359,10Z"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: "20px",
            }}
          ></path>

         
          <path
          id="mouse"
            d="M123.359,70 L123.359,90"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: "20px",
            }}
          ></path>
        </svg>
        <span className="home__scroll-name">Scroll Down</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
