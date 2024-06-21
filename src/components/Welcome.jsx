import React from 'react';
import './Welcome.css'; // Import CSS file for styling

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="animated-font">Welcome to my site.</h1>
      <p>
        I'm Aastha Modi, a Frontend developer.
       
        </p>
      <p>
        I love writing code that takes things to the next level, creating highly performant web apps, automating API integrations, building AI tools, and creating stunning user experiences that make you feel WOW!
      </p>
      <p>
        I am always keen to learn and explore new technologies, frameworks, and programming languages. Currently, I'm learning about LangChain.
      </p>
      <div className="welcome-buttons">
        <button>Let's Work</button>
        <button>Resume</button>
      </div>
    </div>
  );
};

export default Welcome;
