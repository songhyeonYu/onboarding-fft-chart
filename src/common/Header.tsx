import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { loginState } from "../atoms/join";

function Header() {
  const navigate = useNavigate();

  const [infoOpen, setInfoOpen] = useState(false);

  const userInfo = useRecoilValue(loginState);
  const resetLoginState = useResetRecoilState(loginState);

  const infoOpenClick = () => {
    setInfoOpen(!infoOpen);
  };

  const logout = () => {
    resetLoginState();
    navigate("/", { replace: true });
  };

  return (
    <StyledHeader>
      <StyledLogo>FFT Chart</StyledLogo>
      <StyledNavigationList>
        <StyledNavigationItem>
          <NavLink
            to="/chart"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            차트
          </NavLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            뉴스
          </NavLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <NavLink
            to="/community"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            커뮤니티
          </NavLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledInfo onClick={infoOpenClick}>
        <StyledNickname>{userInfo.nickname}</StyledNickname>
        <IoMdArrowDropdown />
        {infoOpen && (
          <StyledInfoItems>
            <StyledInfoItem>설정</StyledInfoItem>
            <StyledInfoItem onClick={() => logout()}>로그아웃</StyledInfoItem>
          </StyledInfoItems>
        )}
      </StyledInfo>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 4rem;
  border-bottom: 1px solid #efefef;
`;

const StyledLogo = styled.div`
  font-size: 1.2rem;
  border: 1px solid #222;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

const StyledNavigationList = styled.ul`
  width: 100%;
  display: flex;
  margin-left: 4rem;
  gap: 4rem;
  align-items: center;
`;
const StyledNavigationItem = styled.li`
  display: flex;
  cursor: pointer;
  font-size: 1.3rem;
  & .active {
    color: #6f86d6;
  }
  &:hover {
    color: #6f86d6;
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

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
  //padding: 10px 0px;
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
