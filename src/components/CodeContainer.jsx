import React from 'react';
import './CodeContainer.css'; // Import CSS file for styling

const CodeContainer = () => {
  return (
    <div className="code-container">
      <pre>
        <code>
          {`import React from 'react';

const Welcome = ({ uses }) => {
  return (
    <>
      <h1>This is my little slice of the internet.</h1>
      <p>
        I use this site to <em>{uses}</em>.
      </p>
    </>
  );
};

export default Welcome;
`}
        </code>
      </pre>
    </div>
  );
};

export default CodeContainer;
