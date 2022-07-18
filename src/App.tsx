import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes></Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
