import React from "react";
import Header from "../common/Header";
import Main from "../common/Main";
import Wrap from "../common/Wrap";
import ChartContainer from "../container/ChartContainer";

function Chart() {
  return (
    <Wrap>
      <Header />
      <Main className={"chart"}>
        <ChartContainer />
      </Main>
    </Wrap>
  );
}

export default Chart;
