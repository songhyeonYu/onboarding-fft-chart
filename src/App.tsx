import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Chart from "./pages/Chart";
import News from "./pages/News";
import Community from "./pages/Community";
import RequireAuth from "./container/AuthRouter";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path={"/"} element={<Join />} />
          <Route
            path={"/chart"}
            element={
              <RequireAuth>
                <Chart />
              </RequireAuth>
            }
          />
          <Route
            path={"/news"}
            element={
              <RequireAuth>
                <News />
              </RequireAuth>
            }
          />
          <Route
            path={"/community"}
            element={
              <RequireAuth>
                <Community />
              </RequireAuth>
            }
          />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
