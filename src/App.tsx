import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Chart from "./pages/Chart";
import News from "./pages/News";
import Community from "./pages/Community";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path={"/"} element={<Join />} />
          <Route path={"/chart"} element={<Chart />} />
          <Route path={"/news"} element={<News />} />
          <Route path={"/community"} element={<Community />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
