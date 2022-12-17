import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginForm = () => {
    axios
      .post("http://127.0.0.1:4000/ragister", { email })
      .then((res) => {
        toast.success(`${res.data.msg} and successfully logged in`);
        localStorage.setItem("email", res.data.data.email);
        setTimeout(() => {
          navigate("/cardsphoto", { replace: true });
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <p className="text-center display-4">LOGIN</p>
      <div className="row mt-5 justify-content-center">
        <Toaster />
        <div className="col-md-6 text-center">
          <div className="form-floating mb-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <Link to="/">Ragister</Link>
          {/* <Link to="panel"> */}
          <div className="d-grid">
            <button
              onClick={LoginForm}
              className="btn btn-primary mt-5 text-light"
            >
              LOGIN
            </button>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
