import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./container/theme/GlobalStyle";
import { RecoilRoot } from "recoil";

import { worker } from "./mocks/worker";

if (process.env.NODE_ENV === "development") {
  worker.start().then((data) => data);
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
);
