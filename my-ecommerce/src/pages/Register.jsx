import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {

    e.preventDefault();

    if (!name || !email || !phone || !password) {
      alert("Please fill all fields.");
      return;
    }

    const user = {
      name,
      email,
      phone,
      password,
      balance: 0
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div className="auth-container">

      <form className="auth-box" onSubmit={handleRegister}>

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </form>

    </div>
  );
}

export default Register;