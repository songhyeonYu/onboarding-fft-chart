import React from "react";
import styled from "styled-components";

type DuplicationCheckProps = {
  show: string;
  checkEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function DuplicationCheck(props: DuplicationCheckProps) {
  const { show, checkEvent } = props;

  const msg = (type: string) => {
    if (type === "empty") {
      return "중복체크를 눌러주세요";
    } else if (type === "fail") {
      return "아이디가 중복됩니다.";
    } else if (type === "success") {
      return "사용 가능한 아이디입니다.";
    }
  };
  return (
    <StyledDuplicationArea>
      <StyledDuplicationMsg type={show}>{msg(show)}</StyledDuplicationMsg>
      <StyledDuplicationCheckBtn onClick={checkEvent}>
        중복 체크
      </StyledDuplicationCheckBtn>
    </StyledDuplicationArea>
  );
}

export default DuplicationCheck;

const StyledDuplicationArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;
const StyledDuplicationMsg = styled.span<{ type: string }>`
  font-size: 0.7rem;
  color: ${(props) => {
    const { type } = props;
    if (type === "empty") {
      return "#000";
    } else if (type === "fail") {
      return "#ff0000";
    } else if (type === "success") {
      return "green";
    }
  }};
`;

const StyledDuplicationCheckBtn = styled.button`
  font-size: 0.7rem;
`;
