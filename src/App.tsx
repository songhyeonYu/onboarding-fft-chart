import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./route/PrivateRouter";
import routeList from "./route/list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map((el) => (
          <Route
            path={el.path}
            element={
              el.private ? (
                <PrivateRouter>{el.element}</PrivateRouter>
              ) : (
                el.element
              )
            }
            key={el.name}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
