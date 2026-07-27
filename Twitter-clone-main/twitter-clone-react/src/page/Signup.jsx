import "./Signup.css";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

function Signup() {
  return (
    <div className="signup-container">
      {/* Left */}
      <div className="signup-left">
        <FaXTwitter className="x-logo" />
      </div>

      {/* Right */}
      <div className="signup-right">

        <h1>Join X today</h1>

        <form className="signup-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button className="create-btn">
            Create Account
          </button>

        </form>

        <p className="signin-text">
          Already have an account?
        </p>

        <Link to="/">
          <button className="signin-btn">
            Sign In
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Signup;