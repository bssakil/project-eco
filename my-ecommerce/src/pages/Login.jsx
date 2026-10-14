import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!savedUser) {
      alert("Please register first.");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {

      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");

      navigate("/home");

    } else {

      alert("Wrong email or password.");

    }
  };

  return (
    <div className="auth-container">

      <form className="auth-box" onSubmit={handleLogin}>

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/"> Register</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;