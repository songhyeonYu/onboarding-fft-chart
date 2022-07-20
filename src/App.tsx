import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Chart from "./pages/Chart";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path={"/"} element={<Join />} />
          <Route path={"/chart"} element={<Chart />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
