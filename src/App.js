import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About.jsx";
import WorkExperience from "./pages/Work Experience/WorkExperience.jsx";
import Education from "./pages/Education/Education.jsx";
import Publications from "./pages/Publications/Publications.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <Router>
      <Layout />
      <About />
      <WorkExperience />
      <Education />
      <Publications />
      <Contact />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
