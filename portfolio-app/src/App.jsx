import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Internship from "./Internship";
import Project from "./Project";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Home></Home>
      <Internship></Internship>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}

export default App;
