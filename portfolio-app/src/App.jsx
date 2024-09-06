import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Internship from "./Internship";
import Project from "./Project";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/internship" element={<Internship></Internship>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
