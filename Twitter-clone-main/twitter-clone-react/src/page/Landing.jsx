import "./Landing.css";
import { Link } from "react-router-dom";
import { FaXTwitter, FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Landing() {
  return (
    <div className="landing-container">
      {/* Left Section */}
      <div className="landing-left">
        <FaXTwitter className="landing-logo" />
      </div>

      {/* Right Section */}
      <div className="landing-right">
        <h1>Happening now</h1>

        <h2>Join today.</h2>

        <button className="social-btn google-btn">
          <FcGoogle />
          <span>Sign up with Google</span>
        </button>

        <button className="social-btn apple-btn">
          <FaApple />
          <span>Sign up with Apple</span>
        </button>

        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <Link to="/signup">
          <button className="create-account-btn">
            Create account
          </button>
        </Link>

        <p className="terms">
          By signing up, you agree to the Terms of Service, Privacy Policy and
          Cookie Use.
        </p>

        <div className="signin-section">
          <h3>Already have an account?</h3>

          <Link to="/login">
            <button className="signin-btn">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;