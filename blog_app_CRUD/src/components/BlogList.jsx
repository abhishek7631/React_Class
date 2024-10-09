import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete, MdThumbUp, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./BlogList.css"; // Add a CSS file for better styling

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const response = await axios.get(
      "https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/post"
    );
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleLike = async (id, likes) => {
    await axios.put(
      `https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/post/${id}`,
      { likes: likes + 1 }
    );
    fetchBlogs();
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/post/${id}`
    );
    fetchBlogs();
  };

  const handleComment = async (blogId) => {
    if (!comment) return;
    const blog = blogs.find((b) => b.id === blogId);
    const updatedComments = [...(blog.comments || []), { text: comment }];

    await axios.put(
      `https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/post/${blogId}`,
      { comments: updatedComments }
    );
    setComment("");
    fetchBlogs();
  };

  return (
    <div className="blog-list-container">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <div className="blog-header">
            <h3>{blog.title}</h3>
          </div>
          <div className="blog-content">
            <p>{blog.content}</p>
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="blog-image" />
            )}
          </div>
          <div className="blog-actions">
            <span>{blog.likes} Likes</span>
            <div className="action-icons">
              <MdThumbUp
                onClick={() => handleLike(blog.id, blog.likes)}
                className="icon like-icon"
                title="Like"
              />
              <MdEdit
                onClick={() => navigate(`/edit/${blog.id}`)}
                className="icon edit-icon"
                title="Edit"
              />
              <MdDelete
                onClick={() => handleDelete(blog.id)}
                className="icon delete-icon"
                title="Delete"
              />
            </div>
          </div>
          <div className="blog-comments">
            <h4>Comments</h4>
            <div className="comments-section">
              {blog.comments ? (
                blog.comments.map((c, index) => <p key={index}>{c.text}</p>)
              ) : (
                <p className="no-comments">No comments yet. Add one below!</p>
              )}
            </div>
            <div className="add-comment">
              <input
                type="text"
                placeholder="Add a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="comment-input"
              />
              <button
                onClick={() => handleComment(blog.id)}
                className="comment-btn"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
