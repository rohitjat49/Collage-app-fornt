import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let emailFromLocal = localStorage.getItem("email");

    if (emailFromLocal !== null) {
      navigate("/cardsphoto", { replace: true });
    } else {
      navigate("/");
    }
  }, [email, name, mobile, password]);

  const Ragister = () => {
    axios
      .post("http://127.0.0.1:4000/ragister", { name, email, mobile, password })
      .then((res) => {
        if (res.data.status !== "Founded") {
          toast.success(`${res.data.msg} data ragistered`);
        } else {
          toast.success(res.data.msg);
          setTimeout(()=>{
            navigate("/login")
          },2000)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <p className="display-3 text-center">Ragister</p>
      <div className="row mt-5 justify-content-center">
        <Toaster />
        <div className="col-md-6 text-center">
          <div className="form-floating mb-3">
            <input
              onChange={(e) => setName(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
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

          <div className="form-floating mb-3">
            <input
              onChange={(e) => setMobile(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Mobile Number</label>
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
          <Link to="/login">Login</Link>
          {/* <Link to="panel"> */}
          <div className="d-grid">
            <button
              onClick={Ragister}
              className="btn btn-primary mt-5 text-light"
            >
              Ragister
            </button>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
