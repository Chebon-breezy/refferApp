import React, { useState } from "react";
import "./Signup.css";
import { useAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { UserLogin } = useAuth();
  const [err, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    phoneNumber: "", // Added phoneNumber field
  });
  const navigate = useNavigate();

  const UserHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email === "" || password === "") {
      setError("Fill All the Fields");
      return;
    }
    try {
      await UserLogin(email, password);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User Not Found");
      } else if (error.code === "auth/wrong-password") {
        setError("Wrong Password");
      } else {
        setError(`${error.message}`);
      }
    }
  };

  return (
    <div className="box">
      {err && <p className="error">{err}</p>}

      <form onSubmit={SubmitHandler} className="form">
        <h2>Login Form</h2>

        <div className="inputfield">
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={UserHandler}
          />
        </div>

        <div className="inputfield">
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={UserHandler}
          />
        </div>

        <div className="inputfield">
          <input type="submit" value="Login" />
        </div>
        <p className="forget">
          Don't have an account?{" "}
          <Link to={"signup"} className="link">
            {"Sign Up"}
          </Link>
        </p>
        <p className="forget">
          Forgot Password?{" "}
          <Link className="link" to={"forget"}>
            Forgot Password
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;