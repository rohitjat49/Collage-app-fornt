// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import axios from "axios";
// import Loader from "./Loader";

// function Panel() {
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const [inp, setinp] = useState("");

//   const APICALL = () => {
//     axios(`http://universities.hipolabs.com/search?country=${inp}`)
//       .then((res) => {
//         let data = res.data.slice(0, 5);
//         setData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     APICALL();
//   }, [data, inp]);

//   const handleClick = () => {
//     setShow(true);
//     // console.log(inp);
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="fixed-top d-flex justify-content-center">
//           <div className="col-4 d-flex">
//             <>
//               <input
//                 onChange={(e) => {
//                   setinp(e.target.value);
//                   setShow(false);
//                 }}
//                 className="form-control me-3"
//                 placeholder="Search Country"
//                 list="countries"
//               ></input>
//               <datalist id="countries">
//                 <option>
//                   Hello wol
//                 </option>
//               </datalist>
//             </>

//             <button onClick={handleClick} className="btn btn-outline-primary">
//               SEARCH
//             </button>
//           </div>
//         </div>
//         <div style={{ marginTop: "50px" }} className="row">
//           {data.map((ele, ind) => {
//             return (
//               <div className="col-md-4 mt-3" key={ind}>
//                 {show ? (
//                   <Card
//                     title={ele.name}
//                     country={ele.country}
//                     webPage={ele.web_pages}
//                   />
//                 ) : null}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Panel;
