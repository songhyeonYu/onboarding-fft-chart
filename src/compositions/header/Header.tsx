import React, { useContext, useState } from "react";
import { AuthContext } from "../../container/Auth/AuthProvider";
import Logo from "../../components/elements/logo/Logo";
import Scale from "../../components/elements/scale/Scale";
import Flex from "../../components/elements/flex/Flex";
import Padding from "../../components/elements/padding/Padding";
import Border from "../../components/elements/border/Border";
import NavItemList from "./navItemList/NavItemList";
import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";
import { NavItems } from "./navItemList/type";
import { resetStorage } from "../../util/storage/storage";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useContext(AuthContext);

  const open = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    resetStorage("user", "local");
    resetStorage("user", "session");
    window.location.replace("/");
  };

  return (
    <Border borderWidth={"0 0 1px 0"} borderColor={"#efefef"}>
      <Padding padding={"25px 4rem"}>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex direction={"row"} gap={"50px"}>
            <Scale scale={1.2} transition={0.5}>
              <Border borderWidth={"1px"} borderRadius={"5px"}>
                <Padding padding={"20px"}>
                  <Logo />
                </Padding>
              </Border>
            </Scale>
            <NavItemList list={NavItems} />
          </Flex>

          {/*시간 관계상 기존 코드 사용*/}
          <Flex direction={"row"} minWidth={"100px"}>
            <StyledInfo onClick={open}>
              <StyledNickname>{user.nickname}</StyledNickname>
              <IoMdArrowDropdown />
              {isOpen && (
                <StyledInfoItems>
                  <StyledInfoItem>설정</StyledInfoItem>
                  <StyledInfoItem onClick={() => logout()}>
                    로그아웃
                  </StyledInfoItem>
                </StyledInfoItems>
              )}
            </StyledInfo>
          </Flex>
        </Flex>
      </Padding>
    </Border>
  );
}

export default Header;

const StyledInfo = styled.div`
  min-width: 100px;
  flex-shrink: 0;
  position: relative;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const StyledNickname = styled.span`
  margin-right: 5px;
`;

const StyledInfoItems = styled.ul`
  width: 100%;
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 30px;
  z-index: 999;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 5px;
`;
const StyledInfoItem = styled.li`
  padding: 8px 1rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
  & + & {
    border-top: 1px solid black;
  }
`;
