import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Photos() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const [EMAIL, setEmail] = useState("");

  useEffect(() => {
    let getEamil = localStorage.getItem("email");

    if (getEamil === null) {
      navigate("/");
    }

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setCards(res.data.slice(0, 100)))
      .catch((err) => console.log(err));

    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((res) => res.json())
    //   .then(data => console.log(data))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <button
        onClick={() => {
          localStorage.clear();
          toast.success("successfully logged out");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }}
        className="btn btn-danger mt-2"
      >
        {" "}
        LOG OUT
      </button>
      <div className="row">
        <Toaster />
        {cards.map((ele, ind) => {
          return (
            <div className="col-md-4 mt-4" key={ele.id}>
              <div className="card">
                <img src={ele.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ele.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary">{ele.id}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
