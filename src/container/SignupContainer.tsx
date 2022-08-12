import React, { useEffect, useState } from "react";
import JoinInput from "../common/JoinInput";
import Signup from "../presentational/signup/Signup";
import { idDuplicationRequest, signupRequest } from "../service/signup";
import { pageStepAtom } from "../atoms/join";
import { useSetRecoilState } from "recoil";
import DuplicationCheck from "../presentational/signup/DuplicationCheck";

function SignupContainer() {
  const setPageStep = useSetRecoilState(pageStepAtom);

  const [signupInput, setSignInput] = useState({
    id: "",
    nickname: "",
    pw: "",
    pwConfirm: "",
  });

  const [idCheck, setIdCheck] = useState("empty");

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

    const duplicationCheck = idDuplicationRequest(id);

    if (duplicationCheck) setIdCheck("success");
    else if (!duplicationCheck) setIdCheck("fail");
  };

  const signupValidationCheck = (
    id: string,
    nickname: string,
    pw: string,
    pwConfirm: string,
    idCheck: string
  ): string => {
    let msg = "";

    if (id.length < 6) {
      msg = "아이디를 6글자 이상 입력해 주세요!";
    } else if (nickname.length < 2) {
      msg = "닉네임을 2글자 이상 입력해 주세요!";
    } else if (pw.length < 6) {
      msg = "비밀번호를 6글자 이상 입력해 주세요!";
    } else if (pwConfirm.length < 6) {
      msg = "비밀번호 확인을 6글자 이상 입력해 주세요!";
    } else if (pw !== pwConfirm) {
      msg = "비밀번호가 일치하지 않습니다.";
    } else if (idCheck === "empty") {
      msg = "중복 체크 버튼을 눌러주세요!";
    } else if (idCheck === "fail") {
      msg = "아이디가 중복됩니다. 아이디를 변경해주세요!";
    }
    return msg;
  };

  const signupOnClick = () => {
    const msg = signupValidationCheck(id, nickname, pw, pwConfirm, idCheck);
    if (msg) {
      alert(msg);
      return;
    }

    signupRequest(id, nickname, pw) && setPageStep("login");
  };

  useEffect(() => {
    setIdCheck("empty");
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
