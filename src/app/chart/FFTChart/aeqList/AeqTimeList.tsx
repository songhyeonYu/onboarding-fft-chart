import React from "react";
import { AeqTimeListProps, AeqTimeProps } from "./Props";
import Hover from "../../../../components/elements/hover/Hover";
import Border from "../../../../components/elements/border/Border";

function AeqTimeCard(props: AeqTimeProps) {
  const { text } = props;
  return (
    <Hover
      cursor={"pointer"}
      background={"#efefef"}
      padding={"2rem"}
      center={"center"}
    >
      {text}
    </Hover>
  );
}

function AeqTimeList(props: AeqTimeListProps) {
  const { aeqTimeList } = props;
  return (
    <Border borderWidth={"0 1px 0 0"}>
      {aeqTimeList.map((el, index) => (
        <AeqTimeCard text={el} key={index} />
      ))}
    </Border>
  );
}

export default AeqTimeList;
