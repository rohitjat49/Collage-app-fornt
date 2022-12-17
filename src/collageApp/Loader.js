import React from "react";

function Loader() {
  return (
    <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status">
        <span className="display-4">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
