import { Route, Routes } from "react-router-dom";
import NavbarComp from "./Components/navbar";
import Project from "./Components/project";
import About from "./Pages/about";
import Career from "./Pages/career";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import NotFound from "./Pages/not-found";
import Projects from "./Pages/projects";
import Skills from "./Pages/skills";

const App = () => {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectid" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
