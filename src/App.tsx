import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { lazy } from "react";

const DetailedUser = lazy(() => import("./pages/DetailedUser"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<DetailedUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
