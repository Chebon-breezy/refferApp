import { AuthErrorCodes } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserAuthContext";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const { SignUp } = useAuth();
  const [err, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "", // Added phoneNumber field
  });

  const UserHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, phoneNumber } = user; // Extract phoneNumber
    if (
      password === "" ||
      confirmPassword === "" ||
      email === "" ||
      phoneNumber === "" // Check for phoneNumber
    ) {
      setError("Please fill all the fields");
    } else if (password !== confirmPassword) {
      setError("Password does not match");
    } else if (password.length < 6 || confirmPassword.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      try {
        await SignUp(email, password, phoneNumber); // Pass phoneNumber to SignUp function
        alert("Welcome! New User created successfully");
        navigate("/");
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setError("Email already in use. Try another email.");
        } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setError("Password must be at least 6 characters long");
        } else {
          setError(err.message);
        }
      }
    }
  };

  return (
    <div className="box">
      {err && <p className="error">{err}</p>}

      <form onSubmit={SubmitHandler} className="form">
        <h2>Registration Form</h2>
        <div className="inputfield">
          <input
            type="text"
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            name="confirmPassword"
            onChange={UserHandler}
          />
        </div>
        {/* New field for phone number */}
        <div className="inputfield">
          <input
            type="tel"
            placeholder="Phone Number"
            value={user.phoneNumber}
            name="phoneNumber"
            onChange={UserHandler}
          />
        </div>
        <div className="inputfield">
          <input type="submit" />
        </div>
        <p className="forget">
          Already have an account?{" "}
          <Link to={"/"} className="link">
            {"Login"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;