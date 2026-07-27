import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Profile.css";
import profileImg from "../assets/profile.jpeg";

const profileTweets = [
  {
    id: 1,
    name: "John Doe",
    handle: "@johndoe · 2h",
    text: "Building a Twitter clone using only HTML and CSS.",
  },
  {
    id: 2,
    name: "John Doe",
    handle: "@johndoe · Yesterday",
    text: "CSS Grid + Flexbox makes layouts so much easier.",
  },
];

function Profile() {
  const [activeTab, setActiveTab] = useState("Posts");
  const tabs = ["Posts", "Replies", "Media", "Likes"];

  return (
    <div className="profile-container">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Profile Main */}
      <main className="profile">
        <header className="profile-header">
          <div className="cover"></div>

          <div className="profile-info">
            <img
              src={profileImg}
              alt="John Doe"
              className="profile-pic"
            />

            <button className="edit-btn">Edit profile</button>

            <h2>John Doe</h2>
            <p className="username">@johndoe</p>
            <p className="bio">
              Frontend Developer &bull; HTML &bull; CSS &bull; JavaScript
            </p>

            <div className="details">
              <span>
                <i className="fa-regular fa-calendar"></i> Joined January 2025
              </span>
            </div>

            <div className="follow">
              <span><b>210</b> Following</span>
              <span><b>1.5K</b> Followers</span>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <span
              key={tab}
              className={activeTab === tab ? "selected" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Tweets */}
        {profileTweets.map((tweet) => (
          <div className="tweet" key={tweet.id}>
            <img src={profileImg} alt={tweet.name} />
            <div>
              <h3>
                {tweet.name} <span>{tweet.handle}</span>
              </h3>
              <p>{tweet.text}</p>
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
          <h3>Subscribe to Premium</h3>
          <p>Subscribe to unlock new features.</p>
          <button>Subscribe</button>
        </div>

        <div className="card">
          <h3>Who to follow</h3>
          <p>@OpenAI</p>
          <p>@Google</p>
          <p>@Microsoft</p>
        </div>
      </aside>
    </div>
  );
}

export default Profile;
