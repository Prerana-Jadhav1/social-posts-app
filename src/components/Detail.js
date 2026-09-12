import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { posts, loading, error } = useSelector((state) => state);

  if (loading) {
    return (
      <div className="status-container">
        <div className="spinner"></div>
        <p>Loading post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error-message">
        <p>Error: {error}</p>
      </div>
    );
  }

  const post = posts.find((p) => String(p.id) === id);

  if (!post) {
    return (
      <div className="status-container error-message">
        <p>Post not found.</p>
        <button className="button" onClick={() => history.push("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <button className="button back-btn" onClick={() => history.push("/")}>
        &larr; Back
      </button>
      <div className="detail-card">
        <img
          className="detail-image"
          src={`https://picsum.photos/200?random=${post.id}`}
          alt={post.title}
        />
        <h2>{post.title}</h2>
        <p className="detail-body">{post.body}</p>
        <p className="detail-user">
          <strong>Created by User ID:</strong> {post.userId}
        </p>
      </div>
    </div>
  );
};

export default Detail;
