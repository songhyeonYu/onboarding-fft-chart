import React, { useEffect, useState } from "react";
import JoinInput from "../common/JoinInput";
import Signup from "../presentational/signup/Signup";
import { idDuplicationRequest, signupRequest } from "../service/signup";
import { pageStepState } from "../atoms/join";
import { useSetRecoilState } from "recoil";
import DuplicationCheck from "../presentational/signup/DuplicationCheck";

function SignupContainer() {
  const setPageStep = useSetRecoilState(pageStepState);

  const [signupInput, setSignInput] = useState({
    id: "",
    nickname: "",
    pw: "",
    pwConfirm: "",
  });

  const [idCheck, setCheck] = useState("empty");

  const { id, nickname, pw, pwConfirm } = signupInput;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignInput({
      ...signupInput,
      [id]: value.trim(),
    });
  };

  const checkOnClick = () => {
    if (id.length < 6) {
      alert("6글자 이상 입력해주세요!");
      return;
    }

    if (idDuplicationRequest(id)) {
      setCheck("success");
    } else if (!idDuplicationRequest(id)) {
      setCheck("fail");
    }
  };

  const signupOnClick = () => {
    if (id.length < 6) {
      alert("아이디를 6글자 이상 입력해 주세요!");
      return;
    } else if (nickname.length < 2) {
      alert("닉네임을 2글자 이상 입력해 주세요!");
      return;
    } else if (pw.length < 6) {
      alert("비밀번호를 6글자 이상 입력해 주세요!");
      return;
    } else if (pwConfirm.length < 6) {
      alert("비밀번호 확인을 6글자 이상 입력해 주세요!");
      return;
    } else if (pw !== pwConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (idCheck === "empty") {
      alert("중복 체크 버튼을 눌러주세요!");
      return;
    } else if (idCheck === "fail") {
      alert("아이디가 중복됩니다. 아이디를 변경해주세요!");
      return;
    }

    signupRequest(id, nickname, pw) && setPageStep("login");
  };

  useEffect(() => {
    setCheck("empty");
  }, [id]);

  return (
    <>
      <JoinInput
        type={"text"}
        label={"아이디"}
        value={id}
        id={"id"}
        placeholder={"아이디를 6글자 이상 입력해주세요!"}
        onChange={onChange}
      />
      <DuplicationCheck show={idCheck} checkEvent={checkOnClick} />
      <JoinInput
        type={"text"}
        label={"닉네임"}
        value={nickname}
        id={"nickname"}
        placeholder={"닉네임을 2글자 이상 입력해주세요!"}
        onChange={onChange}
      />
      <JoinInput
        type={"password"}
        label={"비밀번호"}
        value={pw}
        id={"pw"}
        placeholder={"비밀번호를 6글자 이상 입력해주세요!"}
        onChange={onChange}
      />
      <JoinInput
        type={"password"}
        label={"비밀번호 확인"}
        value={pwConfirm}
        id={"pwConfirm"}
        placeholder={"비밀번호를 6글자 이상 입력해주세요!"}
        onChange={onChange}
      />
      <Signup active={false} signupSubmit={signupOnClick} />
    </>
  );
}

export default SignupContainer;
