import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Home.css";
import profileImg from "../assets/profile.jpeg";

function Home() {
  const [tweets, setTweets] = useState([]);
  const [content, setContent] = useState("");

  // Load posts
  const fetchPosts = () => {
    fetch("http://localhost:8080/api/posts")
      .then((response) => response.json())
      .then((data) => setTweets(data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create new post
  const handleTweet = () => {
    if (content.trim() === "") return;

    fetch("http://localhost:8080/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Ramya",
        content: content,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setContent("");
        fetchPosts();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Feed */}
      <main className="feed">
        <div className="feed-header">
          <h2>Home</h2>
        </div>

        <div className="compose">
          <img src={profileImg} alt="Your profile" />

          <input
            type="text"
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button onClick={handleTweet}>Tweet</button>
        </div>

        {tweets.map((tweet) => (
          <div className="tweet" key={tweet.id}>
            <img src={profileImg} alt={tweet.username} />

            <div>
              <h3>
                {tweet.username} <span>@{tweet.username}</span>
              </h3>

              <p>{tweet.content}</p>

              <div className="tweet-icons">
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-retweet"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-chart-simple"></i>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="right">
        <input type="text" placeholder="Search" />

        <div className="card">
          <h3>Trends for you</h3>
          <p>#HTML</p>
          <p>#CSS</p>
          <p>#WebDevelopment</p>
        </div>

        <div className="card">
          <h3>Who to follow</h3>
          <p>OpenAI</p>
          <p>Google</p>
          <p>Microsoft</p>
        </div>
      </aside>
    </div>
  );
}

export default Home;