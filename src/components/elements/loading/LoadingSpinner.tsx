import React from "react";
import Flex from "../flex/Flex";
import { RotatingLines } from "react-loader-spinner";

function loadingSpinner() {
  return (
    <Flex
      minHeight={"500px"}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <RotatingLines strokeColor="grey" />
    </Flex>
  );
}

export default loadingSpinner;
