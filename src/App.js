import Login from "./collageApp/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photos from "./collageApp/Photos";
import Ragister from "./collageApp/Ragister";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Ragister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cardsphoto" element={<Photos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
