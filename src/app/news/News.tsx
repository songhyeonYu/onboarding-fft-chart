import React from "react";
import Wrap from "../../components/elements/wrap/Wrap";
import Padding from "../../components/elements/padding/Padding";
import Header from "../../compositions/header/Header";

function News() {
  return (
    <Wrap minHeight={"100vh"}>
      <Header />
      <Padding padding={"30px 4rem"}>뉴스 페이지입니다</Padding>
    </Wrap>
  );
}

export default News;
