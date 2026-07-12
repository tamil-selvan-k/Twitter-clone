import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <i className="fa-brands fa-x-twitter"></i>
      </div>

      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>

        <a href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Explore</span>
        </a>

        <a href="#">
          <i className="fa-regular fa-bell"></i>
          <span>Notifications</span>
        </a>

        <NavLink to="/messages" className={({ isActive }) => isActive ? "active" : ""}>
          <i className="fa-regular fa-envelope"></i>
          <span>Messages</span>
        </NavLink>

        <a href="#">
          <i className="fa-solid fa-brain"></i>
          <span>Grok</span>
        </a>

        <a href="#">
          <i className="fa-solid fa-user-group"></i>
          <span>Communities</span>
        </a>

        <a href="#">
          <i className="fa-solid fa-crown"></i>
          <span>Premium</span>
        </a>

        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
          <i className="fa-regular fa-user"></i>
          <span>Profile</span>
        </NavLink>

        <a href="#">
          <i className="fa-solid fa-ellipsis"></i>
          <span>More</span>
        </a>
      </nav>

      <button className="post-btn">Post</button>
    </aside>
  );
}

export default Sidebar;
