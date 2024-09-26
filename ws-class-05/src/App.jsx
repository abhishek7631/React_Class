import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import ImageSlider from "./components/ImageSlider";
import YouTubeVideoSection from "./components/YouTubeVideoSection";
import Footer from "./components/Footer"; // Import Footer
import "./App.css";

function App() {
  return (
    <div>
      <NavbarComponent />
      <ImageSlider />
      <YouTubeVideoSection />
      <Footer /> {/* Include Footer */}
    </div>
  );
}

export default App;
