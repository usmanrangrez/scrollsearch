import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Api from "./Api";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apidemo" element={<Api />} />
      </Routes>
    </>
  );
};

export default App;
