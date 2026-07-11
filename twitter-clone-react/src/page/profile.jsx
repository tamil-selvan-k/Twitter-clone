import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      {/* Cover Photo */}
      <div className="cover-photo"></div>

      {/* Profile Section */}
      <div className="profile-info">
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="profile-image"
        />

        <button className="edit-btn">Edit Profile</button>

        <h2>John Doe</h2>
        <p className="username">@johndoe</p>

        <p className="bio">
          Web Developer | React Enthusiast | Learning every day 🚀
        </p>

        <div className="details">
          <span>📍 India</span>
          <span>📅 Joined July 2026</span>
        </div>

        <div className="follow-info">
          <span><strong>120</strong> Following</span>
          <span><strong>1.5K</strong> Followers</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button>Tweets</button>
        <button>Replies</button>
        <button>Media</button>
        <button>Likes</button>
      </div>

      {/* Sample Tweets */}
      <div className="tweet-card">
        <h4>John Doe</h4>
        <p>@johndoe · 2h</p>
        <p>Excited to build my Twitter Clone using React! 🚀</p>
      </div>

      <div className="tweet-card">
        <h4>John Doe</h4>
        <p>@johndoe · 5h</p>
        <p>Learning React Components and Hooks.</p>
      </div>
    </div>
  );
}

export default Profile;
