import { useState } from "react";
import "./TweetCard.css";
import {
  FaRegComment,
  FaRetweet,
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaShare,
  FaCheckCircle,
} from "react-icons/fa";

function TweetCard({ tweet }) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(tweet.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="tweet-card">
      <img
        src="https://i.pravatar.cc/150?img=5"
        alt="profile"
        className="tweet-avatar"
      />

      <div className="tweet-content">
        <div className="tweet-header">
          <span className="tweet-name">
            {tweet.name}
          </span>

          {tweet.verified && (
            <FaCheckCircle className="verified" />
          )}

          <span className="tweet-username">
            {tweet.username}
          </span>

          <span className="tweet-time">
            · {tweet.time}
          </span>
        </div>

        <p className="tweet-text">
          {tweet.text}
        </p>

        <div className="tweet-actions">

          <button className="action-btn">
            <FaRegComment />
            <span>{tweet.comments}</span>
          </button>

          <button className="action-btn">
            <FaRetweet />
            <span>{tweet.reposts}</span>
          </button>

          <button
            className={`action-btn ${liked ? "liked" : ""}`}
            onClick={handleLike}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
            <span>{likes}</span>
          </button>

          <button
            className={`action-btn ${bookmarked ? "saved" : ""}`}
            onClick={() => setBookmarked(!bookmarked)}
          >
            {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>

          <button className="action-btn">
            <FaShare />
          </button>

        </div>
      </div>
    </div>
  );
}

export default TweetCard;