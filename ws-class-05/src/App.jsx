import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import ImageSlider from "./components/ImageSlider";
import YouTubeVideoSection from "./components/YouTubeVideoSection";
import "./App.css";

function App() {
  return (
    <div>
      <NavbarComponent />
      <ImageSlider />
      <YouTubeVideoSection />
    </div>
  );
}

export default App;
