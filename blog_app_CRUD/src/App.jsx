import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import BlogList from "./Components/BlogList";
import BlogList from "./components/BlogList";
import BlogForm from "./Components/BlogForm";
import EditBlog from "./Components/EditBlog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create" style={{ marginLeft: "10px" }}>
            Create Blog
          </Link>
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
