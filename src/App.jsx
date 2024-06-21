import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Link from react-router-dom
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";
import CodeContainer from "./components/CodeContainer";
import TwitterPost from "./components/TwitterPost";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="logo">Welcome to my site.</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link> {/* Use Link for navigation */}
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>Support | Star on Github | Switch Color Theme</p>
          <div className="twitter-container">
            <TwitterPost />
          </div>
          <div className="code-container">
            <CodeContainer />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
