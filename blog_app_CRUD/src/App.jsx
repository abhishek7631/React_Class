import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import EditBlog from "./components/EditBlog";
// import BlogList from "./Components/BlogList";
// import BlogList from "./components/BlogList";
// import BlogForm from "./Components/BlogForm";
// import EditBlog from "./Components/EditBlog";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="nav">
          <h1>MyBlog</h1>
          <div className="menu">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/create">
              <li>Create Blog</li>
            </Link>
          </div>
        </nav>
        <Routes path="/" element={<BlogList></BlogList>}>
          <Route path="/Create" element={<BlogForm></BlogForm>}></Route>
          <Route path="/edit/:id" element={<EditBlog></EditBlog>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
