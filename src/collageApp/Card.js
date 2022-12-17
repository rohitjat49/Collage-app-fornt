import React from "react";

function Card({ title, country, webPage }) {

    // let word = "H"
    // let code = word.charCodeAt() + 32
    // console.log(code)
    // let char = String.fromCharCode(code)
    // console.log(char)

  return (
    <>
      <div className="card">
        {/* <iframe
          src={`${Array.isArray(webPage) ? webPage[0] : ""}`}
          width="100%"
          height="200px"
          title={title}
        ></iframe> */}

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text display-6">{country}</p>
          {/* <a
            href={`${Array.isArray(webPage) ? webPage[0] : ""}`}
            target="_blank"
            className="btn btn-primary"
          >
            visit website
          </a> */}
        </div>
      </div>
    </>
  );
}

export default Card;
