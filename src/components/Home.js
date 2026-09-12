import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchPosts } from "../redux/actions";

const TITLE_LIMIT = 60;
const BODY_LIMIT = 90;

const truncate = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit).trim()}...` : text;

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="status-container">
        <div className="spinner"></div>
        <p>Loading posts...</p>
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

  return (
    <div className="home-page">
      <div className="posts-grid">
        {posts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => history.push(`/item/${post.id}`)}
          >
            <img
              className="post-image"
              src={`https://picsum.photos/200?random=${post.id}`}
              alt={post.title}
            />
            <h3 className="post-title">{truncate(post.title, TITLE_LIMIT)}</h3>
            <p className="post-body">
              {post.body.length > BODY_LIMIT ? (
                <>
                  {truncate(post.body, BODY_LIMIT)}{" "}
                  <span className="read-more">Read More...</span>
                </>
              ) : (
                post.body
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
