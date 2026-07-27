import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <FaXTwitter className="x-logo" />
      </div>

      {/* Right Section */}
      <div className="login-right">

        <h1>Happening now</h1>

        <h2>Sign in to X</h2>
        <button
    className="login-btn"
    onClick={() => navigate("/home")}
>
    Sign In
</button>

        <form className="login-form">

          <input
            type="text"
            placeholder="Username or Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button className="login-submit-btn"></button>

        </form>

        <p className="forgot">
          Forgot password?
        </p>

        <div className="divider"></div>

        <p className="signup-text">
          Don't have an account?
        </p>

        <Link to="/signup">
          <button className="signup-btn">
            Create account
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Login;