import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import Explore from "./Explore";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/explore" element={<Explore></Explore>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
