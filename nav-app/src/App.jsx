import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import Internship from "./Internship";
import Contact from "./Contact";
import Navigation from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Project";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/project" element={<Project></Project>}></Route>
          <Route path="/about" element={<Internship></Internship>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
