import Sidebar from "../components/Sidebar";
import "./Home.css";
import profileImg from "../assets/profile.jpeg";

const tweets = [
  {
    id: 1,
    name: "Elon Musk",
    handle: "@elonmusk · 2m",
    text: "Welcome to the HTML & CSS Twitter clone.",
  },
  {
    id: 2,
    name: "OpenAI",
    handle: "@OpenAI · 1h",
    text: "Building beautiful interfaces without JavaScript.",
  },
];

function Home() {
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
          <input type="text" placeholder="What's happening?" />
        </div>

        {tweets.map((tweet) => (
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
