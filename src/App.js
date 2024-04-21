import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particles from "./Components/ParticlesBackground";
import CustomCursor from "./Components/CustomCursor"
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
function App() {
  return (
    <Router>
      <Header />
      <Particles/>
      <CustomCursor/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </Router>
  );
}
export default App;
