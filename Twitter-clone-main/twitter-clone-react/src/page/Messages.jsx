import { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./Messages.css";
import profileImg from "../assets/profile.jpeg";

const chatData = {
  "Elon Musk": {
    username: "@elonmusk",
    preview: "Welcome to X Messages.",
    messages: [
      { type: "received", text: "Welcome to the Twitter Clone Messages page 👋" },
      { type: "sent", text: "Thank you! The UI looks awesome." },
      { type: "received", text: "Make sure every page follows the same design language." },
      { type: "sent", text: "Sure! I'm updating it now." },
    ],
  },
  OpenAI: {
    username: "@OpenAI",
    preview: "Building AI for everyone.",
    messages: [
      { type: "received", text: "Hello! How is your project going?" },
      { type: "sent", text: "Almost completed." },
      { type: "received", text: "Great work 👍" },
    ],
  },
  Microsoft: {
    username: "@Microsoft",
    preview: "Hello 👋",
    messages: [
      { type: "received", text: "Welcome!" },
      { type: "sent", text: "Thanks 😊" },
      { type: "received", text: "Let's collaborate soon." },
    ],
  },
  Google: {
    username: "@Google",
    preview: "Let's build something amazing.",
    messages: [
      { type: "received", text: "Hi there 👋" },
      { type: "sent", text: "Hello!" },
      { type: "received", text: "Have a great day!" },
    ],
  },
};

const emojis = ["😀","😁","😂","🤣","😊","😍","😘","😎","🥰","😭","😢","😡","👍","👏","🙏","❤️","🔥","🎉","🤝","👌"];

function Messages() {
  const [activeChat, setActiveChat] = useState("Elon Musk");
  const [messages, setMessages] = useState(chatData["Elon Musk"].messages);
  const [inputText, setInputText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChatClick = (name) => {
    setActiveChat(name);
    setMessages(chatData[name].messages);
    setShowEmoji(false);
  };

  const sendMessage = () => {
    const text = inputText.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { type: "sent", text }]);
    setInputText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleEmojiClick = (emoji) => {
    setInputText((prev) => prev + emoji);
  };

  return (
    <div className="messages-container">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Messages Panel */}
      <main className="messages-panel">
        <div className="messages-header">
          <h2>Messages</h2>
          <div className="header-icons">
            <i className="fa-solid fa-gear"></i>
            <i className="fa-solid fa-pen"></i>
          </div>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search Direct Messages" />
        </div>

        <div className="chat-list">
          {Object.entries(chatData).map(([name, data]) => (
            <div
              key={name}
              className={`chat ${activeChat === name ? "active" : ""}`}
              onClick={() => handleChatClick(name)}
            >
              <img src={profileImg} alt={name} />
              <div>
                <h4>
                  {name} <span>{data.username}</span>
                </h4>
                <p>{data.preview}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Conversation */}
      <section className="conversation">
        <div className="conversation-header">
          <div className="user-info">
            <img src={profileImg} alt={activeChat} />
            <div>
              <h3>{activeChat}</h3>
              <span>{chatData[activeChat].username}</span>
            </div>
          </div>
          <div className="conversation-icons">
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-video"></i>
            <i className="fa-solid fa-circle-info"></i>
          </div>
        </div>

        <div className="conversation-body" ref={bodyRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="message-box">
          <div className="emoji-wrapper">
            <button
              className="emoji-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowEmoji((prev) => !prev);
              }}
            >
              <i className="fa-regular fa-face-smile"></i>
            </button>

            {showEmoji && (
              <div
                className="emoji-picker show"
                onClick={(e) => e.stopPropagation()}
              >
                {emojis.map((emoji) => (
                  <span
                    key={emoji}
                    onClick={() => handleEmojiClick(emoji)}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Start a new message"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          <button className="send-btn" onClick={sendMessage}>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </section>

      {/* Right Sidebar */}
      <aside className="right">
        <input type="text" placeholder="Search" />

        <div className="card">
          <h3>Recent Contacts</h3>
          <p>Elon Musk</p>
          <p>OpenAI</p>
          <p>Microsoft</p>
          <p>Google</p>
        </div>

        <div className="card">
          <h3>Message Requests</h3>
          <p>No new message requests.</p>
        </div>

        <div className="card">
          <h3>Tips</h3>
          <p>✔ Keep conversations professional.</p>
          <p>✔ Use search to find old chats.</p>
          <p>✔ Stay connected with your friends.</p>
        </div>
      </aside>
    </div>
  );
}

export default Messages;
