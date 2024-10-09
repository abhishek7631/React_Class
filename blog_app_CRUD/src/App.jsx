import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import EditBlog from "./components/EditBlog";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter>
      <div>
        <nav className="nav">
          <h1 className="logo">MyBlog</h1>
          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/create" className="nav-link">
              Create Blog
            </Link>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<BlogForm />} />
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
