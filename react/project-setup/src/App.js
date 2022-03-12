import { Link, Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";

import { About, Home, Projects, Contact } from "./pages";

function App() {
  return (
    <div>
      <h1>New Project</h1>
      <ul>
        <li>
          <Link to="/home/hi">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/home/:param1" element={<Home customProp="hi" />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
