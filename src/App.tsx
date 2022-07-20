import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./pages/Join";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path={"/"} element={<Join />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
