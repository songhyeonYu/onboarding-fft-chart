import React from "react";
import Flex from "../../../components/elements/flex/Flex";
import { NavLink } from "react-router-dom";
import Text from "../../../components/elements/text/Text";
import Scale from "../../../components/elements/scale/Scale";
import { NavItemListProps, NavItemProps } from "./Props";

export function NavItem(props: NavItemProps) {
  const { name, to } = props;

  return (
    <Flex direction={"row"}>
      <Scale scale={1.2} transition={0.5}>
        <NavLink
          to={to}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#6f86d6",
                }
              : {}
          }
        >
          <Text text={name} size={"1.3rem"} cursor={"pointer"} />
        </NavLink>
      </Scale>
    </Flex>
  );
}

function NavItemList(props: NavItemListProps) {
  const { list } = props;
  return (
    <Flex direction={"row"} gap={"4rem"} alignItems={"center"}>
      {list.map((item, index) => {
        const { name, to } = item;
        return <NavItem name={name} to={to} key={index} />;
      })}
    </Flex>
  );
}

export default NavItemList;
