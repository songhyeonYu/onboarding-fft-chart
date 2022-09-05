import React from "react";
import Flex from "../../../../components/elements/flex/Flex";
import { ThresholdItemProps, ThresholdListProps } from "./Props";
import Border from "../../../../components/elements/border/Border";
import Hover from "../../../../components/elements/hover/Hover";

function ThresholdCard(props: ThresholdItemProps) {
  const { text } = props;

  return (
    <Border borderWidth={"1px"}>
      <Hover color={"#fff"} background={"#6f86d6"} cursor={"pointer"}>
        <Flex
          direction={"row"}
          minWidth={"150px"}
          padding={"10px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {text}
        </Flex>
      </Hover>
    </Border>
  );
}

function ThresholdList(props: ThresholdListProps) {
  const { ThresholdList } = props;
  return (
    <Flex direction={"row"} padding={"20px 2rem"} gap={"1rem"} wrap={"wrap"}>
      {ThresholdList.map((el, index) => {
        const { bandName } = el;
        return <ThresholdCard text={bandName} key={index} />;
      })}
    </Flex>
  );
}

export default ThresholdList;
