import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./BlogForm.css"; // CSS file for form styling

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/post", {
      title,
      content,
      image,
      likes: 0,
    });

    navigate("/");
  };

  return (
    <div className="blog-form-container">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="Write your content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            placeholder="Paste image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
